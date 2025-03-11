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
