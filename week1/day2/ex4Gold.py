import random

#  Function to simulate rolling a dice
def throw_dice():
    return random.randint(1, 6)

# Function to throw dice until doubles appear
def throw_until_doubles():
    throws = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        throws += 1
        if die1 == die2:
            return throws

# Main function: simulate 100 double rolls
def main():
    results = []  # Store number of throws for each double
    for _ in range(100):
        results.append(throw_until_doubles())

    # Calculate total throws and average
    total_throws = sum(results)
    avg_throws = round(total_throws / 100, 2)

    print(f" Total throws: {total_throws}")
    print(f" Average throws to reach doubles: {avg_throws}")

# Run the main function
main()
