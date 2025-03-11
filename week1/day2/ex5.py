import random

def compare_numbers(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        print(" Success! You guessed the number correctly!")
    else:
        print(f" Fail! Your number: {user_number}, Random number: {random_number}")


num = int(input("Enter a number between 1 and 100: "))
compare_numbers(num)
 