import requests
import sqlite3
import random

DB_NAME = "countries.db"

def create_table():
    """Create the 'countries' table if it doesn't exist."""
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS countries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        flag TEXT NOT NULL
    )
    ''')

    conn.commit()
    conn.close()

def get_random_countries(n=10):
    url = "https://restcountries.com/v3.1/all?fields=name,flags"
    response = requests.get(url)

    if response.status_code == 200:
        countries = response.json()
        return random.sample(countries, n)  
    else:
        print("Error fetching data from API")
        return []

def insert_countries(countries):
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    query = "INSERT INTO countries (name, flag) VALUES (?, ?)"

    for country in countries:
        name = country.get("name", {}).get("common", "Unknown")
        flag = country.get("flags", {}).get("png", "No flag")
        cursor.execute(query, (name, flag))

    conn.commit()
    conn.close()
    print(f"{len(countries)} countries added successfully!")

def fetch_all_countries():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM countries")
    rows = cursor.fetchall()

    conn.close()

    for row in rows:
        print(row)

if __name__ == "__main__":
    create_table()  
    countries = get_random_countries()
    if countries:
        insert_countries(countries)

    print("\n Stored Countries:")
    fetch_all_countries()
