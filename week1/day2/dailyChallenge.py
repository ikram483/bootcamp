# Ask the user for a word
word = input("Enter a word: ")

# Initialize an empty dictionary
letter_indices = {}

# Loop through each letter with its index using enumerate()
for index, letter in enumerate(word):
    if letter in letter_indices:
        letter_indices[letter].append(index)  # Append the index if letter already exists
    else:
        letter_indices[letter] = [index]  # Create a new list with the first index

# Print the final dictionary
print(letter_indices)
