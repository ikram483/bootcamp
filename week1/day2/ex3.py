# 1 Create the brand dictionary
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2 Change the number of stores to 2
brand["number_stores"] = 2

# 3 Print who Zara's clients are using type_of_clothes
print(f"Zara serves customers in categories: {', '.join(brand['type_of_clothes'])}")

# 4 Add country of creation
brand["country_creation"] = "Spain"

# 5 Check if international_competitors exists and add 'Desigual'
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6 Delete the creation_date key
del brand["creation_date"]

# 7 Print the last international competitor
print(f"Last international competitor: {brand['international_competitors'][-1]}")

# 8 Print major colors in the US
print(f"Major colors in the US: {brand['major_color']['US']}")

# 9 Print the number of key-value pairs in the dictionary
print(f"Total key-value pairs: {len(brand)}")

# 10 Print all the keys of the dictionary
print(f"Keys: {list(brand.keys())}")

# 11 Create another dictionary called more_on_zara
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12 Add more_on_zara information to the brand dictionary
brand.update(more_on_zara)

# 13Print the updated number of stores
print(f"Updated number of stores: {brand['number_stores']}")
