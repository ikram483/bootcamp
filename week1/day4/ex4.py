# create family class

class Family:
    def __init__(self, last_name, members):
        """Initialize a family with a last name and a list of members."""
        self.last_name = last_name
        self.members = members  # List of dictionaries

    def born(self, **kwargs):
        """Add a child to the family with provided details."""
        self.members.append(kwargs)
        print(f" Congratulations! A new baby {kwargs['name']} is born into the {self.last_name} family!")

    def is_18(self, name):
        """Check if a family member is over 18 years old."""
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
        return False  # If member not found

    def family_presentation(self):
        """Print the family's last name and all member's details."""
        print(f"\n The {self.last_name} Family:")
        for member in self.members:
            print(f" - {member['name']}, {member['age']} years old, {member['gender']}, Child: {member['is_child']}")
