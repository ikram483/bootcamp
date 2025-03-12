# Class definition
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

# Creating dog objects
ikrams_dog = Dog("Pokie", 50)
soukas_dog = Dog("tagger", 20)

# Printing dog details
print(f"ikram's dog: {ikrams_dog.name}, {ikrams_dog.height}cm")
ikrams_dog.bark()
soukas_dog.jump()

print(f"Sarah's dog: {soukas_dog.name}, {soukas_dog.height}cm")
soukas_dog.bark()
soukas_dog.jump()

# Checking which dog is bigger
bigger_dog = ikrams_dog if ikrams_dog.height > soukas_dog.height else soukas_dog
print(f"The bigger dog is {bigger_dog.name}.")
