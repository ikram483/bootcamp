# 1 Create a dictionary of birthdays
birthdays = {
    "ikram": "2001/08/20",
    "soukaina": "1988/12/24",
    "kaoutar": "2000/03/09",
    "meryem": "1992/09/27",
    "soumaya": "1998/07/30"
}

# 2 Print welcome message
print(" Welcome to the Birthday Look-up! ")
print("You can look up the birthdays of the following people:")

# 3 Ask user for a name
user_name = input("\nEnter a name to look up their birthday: ").strip()

# 4 Check if name exists and display birthday
if user_name in birthdays:
    print(f" {user_name}'s birthday is on {birthdays[user_name]}!")
else:
    print(f" Sorry, we don't have the birthday information for {user_name}.")