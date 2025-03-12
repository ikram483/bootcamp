#A movie theater charges different ticket prices depending on a person’s age.
#if a person is under the age of 3, the ticket is free.
#if they are between 3 and 12, the ticket is $10.
#if they are over the age of 12, the ticket is $15.
#Given the following object:


#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


#How much does each family member have to pay ?
#Print out the family’s total cost for the movies.
#€Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# Initialize an empty dictionary for family members
family = {}

# Ask the user how many family members they want to add
num_members = int(input("How many family members? "))

# Collect family members' names and ages
for _ in range(num_members):
    name = input("Enter name: ").strip().capitalize()  # Capitalize the name for better formatting
    age = int(input("Enter age: "))
    family[name] = age  # Add the member to the dictionary

# Initialize total cost
total_cost = 0

print("\n Ticket Prices \n")

# Define ticket pricing and calculate total cost
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    total_cost += price
    print(f"{name} has to pay ${price}")

# Print total cost for the family
print(f"\n Total cost for the family: ${total_cost}")
