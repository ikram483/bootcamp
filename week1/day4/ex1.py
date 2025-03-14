# Base Pets class
class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        """Make all pets walk"""
        for animal in self.animals:
            print(animal.walk())

# Base Cat class
class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

# Bengal Cat breed
class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Chartreux Cat breed
class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Siamese Cat breed (New class)
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Creating cat instances
bengal_cat = Bengal("Tiger", 3)
chartreux_cat = Chartreux("Misty", 5)
siamese_cat = Siamese("Luna", 2)
# Creating a list of Sara's cats
all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Creating Sara's pets instance
sara_pets = Pets(all_cats)

# Taking all cats for a walk
sara_pets.walk()
