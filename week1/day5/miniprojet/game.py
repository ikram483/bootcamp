import random

class Game:
    def __init__(self):
        """Initialize the game class"""
        self.choices = ["rock", "paper", "scissors"]

    def get_user_item(self):
        """Ask the user to choose Rock, Paper, or Scissors"""
        while True:
            user_choice = input("Choose Rock, Paper, or Scissors: ").strip().lower()
            if user_choice in self.choices:
                return user_choice
            print(" Invalid choice! Please enter Rock, Paper, or Scissors.")

    def get_computer_item(self):
        """Randomly select Rock, Paper, or Scissors for the computer"""
        return random.choice(self.choices)

    def get_game_result(self, user_item, computer_item):
        """Compare user and computer choices and determine the winner"""
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "scissors" and computer_item == "paper") or \
             (user_item == "paper" and computer_item == "rock"):
            return "win"
        else:
            return "loss"

    def play(self):
        """Run a single game round and return the result"""
        user_choice = self.get_user_item()
        computer_choice = self.get_computer_item()
        result = self.get_game_result(user_choice, computer_choice)

        print(f"\n You chose: {user_choice.capitalize()}")
        print(f" Computer chose: {computer_choice.capitalize()}")
        
        if result == "win":
            print(" You WIN!")
        elif result == "loss":
            print(" You LOSE!")
        else:
            print(" It's a DRAW!")

        return result  # Returns "win", "loss", or "draw"
