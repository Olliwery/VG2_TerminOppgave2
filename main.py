from flask import Flask, render_template, session, request, redirect, url_for
import mysql.connector
import os

app = Flask(__name__)

app.secret_key = os.urandom(24)

def get_db_connection():
    connection = mysql.connector.connect(
        host="10.2.3.153",  # Adresse til databasen (Raspberry Pi)
        user="sushi",  # Brukernavn
        password="sushi",  # Passord
        database="SushiClicker"  # Databasenavn
    )
    return connection


@app.route("/")
def home():
    name = session.get('name')  # Henter brukernavn fra sesjonen
    return render_template("index.html", name=name)


@app.route("/brukerSide")
def brukerSide():
    return render_template("brukerSide.html")

# REGISTRER ------------------------------------------------------------------
@app.route("/registrer")
def registrer():
    return render_template("registrer.html")

@app.route("/registrer_post", methods=['POST'])
def registrer_post():
    name = request.form['name']
    email = request.form['email']  # Henter e-post
    password = request.form['passord']  # Henter passord

    conn = get_db_connection()
    cursor = conn.cursor()

    # Setter inn ny bruker i databasen
    query = "INSERT INTO Brukere (name, email, passord) VALUES (%s, %s, %s)"
    cursor.execute(query, (name, email, password))
    conn.commit()

    cursor.close()
    conn.close()
    
    session['name'] = name
    
    
    return redirect("/")


# LOGIN ------------------------------------------------------------------
@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/login_post", methods=['POST'])
def login_post():
    name = request.form['name']
    email = request.form['email']
    password = request.form['passord']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    query = "SELECT * FROM Brukere WHERE name = %s AND email = %s AND passord = %s"
    cursor.execute(query, (name, email, password))
    user = cursor.fetchone()
    
    cursor.close()
    conn.close()
    
    if user:
        session['name'] = name
        return redirect("/")
    else:
        return render_template('/login', error="Feil email eller passord.")
    
@app.route('/logout')
def logout():   
    session.clear()  # Fjerner all sesjonsdata
    return redirect("/")
    

if __name__ == "__main__":
    app.run(debug=True)

