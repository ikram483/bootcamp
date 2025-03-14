from game import Game

def get_user_menu_choice():
    """Display the menu and get user's choice"""
    print("\n Menu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")

    while True:
        choice = input("Enter your choice (1/2/3): ").strip()
        if choice in ["1", "2", "3"]:
            return choice
        print(" Invalid choice! Please enter 1, 2, or 3.")

def print_results(results):
    """Display game statistics"""
    print("\n Game Results:")
    print(f" Wins: {results['win']}")
    print(f" Losses: {results['loss']}")
    print(f" Draws: {results['draw']}")
    print("\n Thanks for playing Rock, Paper, Scissors!")

def main():
    """Main game loop"""
    results = {"win": 0, "loss": 0, "draw": 0}  # Score tracker

    while True:
        choice = get_user_menu_choice()

        if choice == "1":  # Play game
            game = Game()
            result = game.play()
            results[result] += 1  # Update score

        elif choice == "2":  # Show scores
            print_results(results)

        elif choice == "3":  # Quit
            print_results(results)
            break

# Run the game
if __name__ == "__main__":
    main()
