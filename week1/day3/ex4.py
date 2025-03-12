# Class definition
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(f"Animals in {self.name}: {', '.join(self.animals)}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []
            grouped_animals[first_letter].append(animal)
        return grouped_animals

    def get_groups(self):
        groups = self.sort_animals()
        for key, group in groups.items():
            print(f"{key}: {group}")

# Creating a zoo object
new_york_zoo = Zoo("New York Zoo")

# Adding animals
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Zebra")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")

# Displaying animals
new_york_zoo.get_animals()

# Selling an animal
new_york_zoo.sell_animal("Lion")
print("\nAfter selling Lion:")
new_york_zoo.get_animals()

# Sorting and grouping animals
print("\nGrouped Animals:")
new_york_zoo.get_groups()
