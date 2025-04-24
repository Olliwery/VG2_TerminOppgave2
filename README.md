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

```bash
# 1. Klon prosjektet
git clone https://github.com/ditt-brukernavn/sushi-clicker.git
cd sushi-clicker

# 2. Lag virtuelt miljø og installer avhengigheter
python -m venv venv

# Aktiver venv:
# På Mac/Linux:
source venv/bin/activate
# På Windows:
venv\Scripts\activate

# Installer nødvendige pakker
pip install flask mysql-connector-python

# 3. Sett opp databasen
# Kjør SQL-fila for å lage tabellene
mysql -u brukernavn -p < db.sql

# NB: Erstatt "brukernavn" med din MySQL-bruker

# 4. Oppdater main.py med dine databaseinnstillinger
# Finn funksjonen get_db_connection() og sett inn riktig info:
# Eksempel:
# connection = mysql.connector.connect(
#     host='localhost',
#     user='ditt-brukernavn',
#     password='ditt-passord',
#     database='sushi_clicker'
# )

# 5. Start serveren
python main.py

# 6. Åpne spillet i nettleseren:
# Gå til: http://127.0.0.1:5000
```

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

## Hvordan bidra

1. Fork prosjektet.  
2. Opprett en ny branch:

```bash
git checkout -b feature-navn
```

3. Gjør endringer og committ:

```bash
git add .
git commit -m "Legg til ny funksjon"
```

4. Push branchen:

```bash
git push origin feature-navn
```

5. Lag en pull request.

## Lisens

Dette prosjektet er fritt tilgjengelig for læring og utvikling.
