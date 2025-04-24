# Sushi Clicker

Sushi Clicker er et webbasert klikkespill hvor brukere kan samle poeng ved å klikke på sushi, oppgradere klikket sitt og ansette kokker som genererer poeng automatisk. Spillet inkluderer brukerregistrering, innlogging og lagring av spilldata i en MySQL-database.

## Innhold

- [Om prosjektet](#om-prosjektet)
- [Funksjonalitet](#funksjonalitet)
- [Installasjon](#installasjon)
- [Bruk](#bruk)
- [Struktur](#struktur)

## Om prosjektet

Sushi Clicker lar brukeren:
- Klikke på sushi for å samle poeng.
- Oppgradere klikkmultiplikatoren for å få flere poeng per klikk.
- Ansette kokker som automatisk genererer poeng.
- Oppgradere kokkenes effektivitet.

Alt lagres i en database, slik at poeng og fremgang bevares mellom økter.

## Funksjonalitet

**Backend (Flask)**  
- Brukerregistrering med navn, e-post og passord  
- Innlogging og henting av brukerdata  
- Lagring av poeng og oppgraderinger i MySQL-database  

**Frontend**  
- HTML/CSS: responsivt og brukervennlig design  
- JavaScript: klikk-logikk, oppgraderinger og auto-klikk  

**Database**  
- `Brukere`: lagrer brukerinformasjon  
- `BrukerScore`: lagrer poeng, oppgraderinger og kokker  

## Installasjon

1. Klon prosjektet:
```bash
git clone https://github.com/ditt-brukernavn/sushi-clicker.git
cd sushi-clicker
```

2. Opprett virtuelt miljø og installer avhengigheter:
```bash
python -m venv venv
```

Aktiver miljøet:
```bash
# På Mac/Linux
source venv/bin/activate
```
```bash
# På Windows
venv\Scripts\activate
```

Installer nødvendige pakker:
```bash
pip install flask mysql-connector-python
```

3. Sett opp databasen:
```bash
mysql -u brukernavn -p < db.sql
```
> Erstatt `brukernavn` med din egen MySQL-bruker.

4. Oppdater databaseinnstillinger i `main.py`:
```python
# Eksempel på get_db_connection():
connection = mysql.connector.connect(
    host='localhost',
    user='ditt-brukernavn',
    password='ditt-passord',
    database='sushi_clicker'
)
```

5. Start serveren:
```bash
python main.py
```

6. Åpne spillet i nettleseren:
Gå til [http://127.0.0.1:5000](http://127.0.0.1:5000)

## Bruk

- Gå til `/registrer` for å opprette en bruker  
- Gå til `/login` for å logge inn  
- Klikk på sushi for å samle poeng  
- Kjøp oppgraderinger og ansett kokker  
- Trykk på "Lagre Scoren" for å lagre fremgangen  

## Struktur

```
SushiClicker/
├── main.py                # Flask-backend
├── db.sql                 # SQL-script for database
├── static/                # CSS, JS og bilder
│   ├── style.css
│   ├── script.js
│   └── images/
├── templates/             # HTML-sider
│   ├── index.html
│   ├── registrer.html
│   ├── login.html
│   └── brukerSide.html
└── README.md              # Denne fila
```

## Lisens

Dette prosjektet er fritt tilgjengelig for læring og utvikling.
