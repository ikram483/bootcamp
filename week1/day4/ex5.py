from ex4 import Family 

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        """Initialize an Incredible Family, adding superhero attributes."""
        super().__init__(last_name, members)
        for member in self.members:
            if "power" not in member:
                member["power"] = "Unknown"
            if "incredible_name" not in member:
                member["incredible_name"] = "Unknown"

    def use_power(self, name):
        """Prints a member's power if they are over 18, else raises an exception."""
        for member in self.members:
            if member["name"] == name:
                if member["age"] < 18:
                    raise Exception(f"X {name} is not over 18 years old and cannot use their power!")
                print(f"wow {name} (aka {member['incredible_name']}) uses their power: {member['power']}!")
                return
        print(f"X {name} is not found in the family!")

    def incredible_presentation(self):
        """Prints the Incredibles family with all their superhero details."""
        print(f"\n Here is our powerful family, The {self.last_name}!")
        super().family_presentation()  # Calls family_presentation() from Family class
        for member in self.members:
            print(f"    Superhero: {member['incredible_name']}, Power: {member['power']}")

# Creating an instance of TheIncredibles family
incredibles_family = TheIncredibles("Incredibles", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])

# Displaying the family
incredibles_family.incredible_presentation()

# Using superpowers
incredibles_family.use_power("Michael")
incredibles_family.use_power("Sarah")

# Adding Baby Jack
incredibles_family.born(name="Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

# Displaying the family after Baby Jack is born
incredibles_family.incredible_presentation()
