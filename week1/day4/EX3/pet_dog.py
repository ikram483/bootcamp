import random
from dog import Dog  # Importing Dog class

# PetDog class that inherits from Dog
class PetDog(Dog):
    def __init__(self, name, age, weight):
        """Initialize the PetDog with additional attribute 'trained'"""
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        """Makes the dog bark and sets trained to True."""
        print(self.bark())  # Calls the inherited bark method
        self.trained = True
        print(f" {self.name} is now trained!")

    def play(self, *dog_names):
        """Prints that the dogs are playing together."""
        dogs_playing = ", ".join(dog_names)
        print(f"🐕 {self.name}, {dogs_playing} all play together!")

    def do_a_trick(self):
        """Performs a random trick if the dog is trained."""
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f" {self.name} is not trained yet. Train the dog first!")

# Creating PetDog instances
dog1 = PetDog("Buddy", 4, 22)
dog2 = PetDog("Rocky", 3, 18)
dog3 = PetDog("Charlie", 5, 25)

# Training the first dog
dog1.train()

# Playing with multiple dogs
dog1.play(dog2.name, dog3.name, "Max")

# Performing tricks
dog1.do_a_trick()
dog2.do_a_trick()  # This dog is not trained yet
