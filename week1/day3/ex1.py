# Class definition
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Function to find the oldest cat
def find_oldest_cat(cats):
    return max(cats, key=lambda cat: cat.age)

# Creating 3 cat objects
cat1 = Cat("MIMI", 11)
cat2 = Cat("KATY", 9)
cat3 = Cat("FIFI", 2)

# Storing them in a list
cats = [cat1, cat2, cat3]

# Finding and printing the oldest cat
oldest = find_oldest_cat(cats)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")
