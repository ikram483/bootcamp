class Farm:
    def __init__(self, name):
        """Initialize the farm with a name and an empty dictionary of animals."""
        self.name = name
        self.animals = {}

    def add_animal(self, animal, count=1):
        """Adds an animal to the farm. If already present, increases its count."""
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        """Returns formatted information about the farm and its animals."""
        farm_info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            farm_info += f"{animal} : {count}\n"
        farm_info += "\n    E-I-E-I-0!\n"
        return farm_info

    def get_animal_types(self):
        """Returns a sorted list of all unique animal types in the farm."""
        return sorted(self.animals.keys())

    def get_short_info(self):
        """Returns a sentence summarizing the animals on the farm."""
        animal_types = self.get_animal_types()
        # Handle pluralization (adding "s" if the count > 1)
        formatted_animals = [animal + "s" if self.animals[animal] > 1 else animal for animal in animal_types]
        # Join elements with proper grammar
        return f"{self.name}'s farm has {', '.join(formatted_animals[:-1])} and {formatted_animals[-1]}."

#  Creating the farm object
macdonald = Farm("McDonald")

#  Adding animals
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

#  Printing farm info
print(macdonald.get_info())

#  Printing sorted animal types
print(macdonald.get_animal_types())

#  Printing short farm info
print(macdonald.get_short_info())
