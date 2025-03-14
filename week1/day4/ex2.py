# Dog class definition
class Dog:
    def __init__(self, name, age, weight):
        """Initialize the dog with name, age, and weight."""
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        """Returns a string indicating that the dog is barking."""
        return f"{self.name} is barking!"

    def run_speed(self):
        """Calculates and returns the dog's running speed."""
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        """Determines the winner in a fight based on (run speed x weight)."""
        my_power = self.run_speed() * self.weight
        opponent_power = other_dog.run_speed() * other_dog.weight

        if my_power > opponent_power:
            return f" {self.name} wins the fight against {other_dog.name}!"
        elif my_power < opponent_power:
            return f" {other_dog.name} wins the fight against {self.name}!"
        else:
            return " It's a tie! Both dogs are equally strong."

# Creating three Dog instances
dog1 = Dog("pokie", 5, 20)
dog2 = Dog("Bolt", 3, 25)
dog3 = Dog("Max", 4, 18)

# Testing the dogs
print(dog1.bark())  # Rex barking
print(f"{dog1.name}'s speed: {dog1.run_speed():.2f}")

print(dog2.bark())  # Bolt barking
print(f"{dog2.name}'s speed: {dog2.run_speed():.2f}")

print(dog3.bark())  # Max barking
print(f"{dog3.name}'s speed: {dog3.run_speed():.2f}")

# Fighting between dogs
print(dog1.fight(dog2))  # pokie vs Bolt
print(dog2.fight(dog3))  # Bolt vs Max
print(dog3.fight(dog1))  # Max vs Rex
