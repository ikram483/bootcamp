# dog.py

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
