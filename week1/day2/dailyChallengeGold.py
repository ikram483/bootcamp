# Given matrix as a list of strings (each row)
matrix = [
    "7ii",
    "Tsx",
    "h%?",
    "i #",
    "sM ",
    "$a ",
    "#t%",
    "^r!"
]

# Convert the matrix to a list of columns
num_cols = len(matrix[0])  # Number of columns
num_rows = len(matrix)  # Number of rows

# Initialize an empty string for the decrypted message
decoded_message = ""

# Read the matrix column by column (top to bottom)
for col in range(num_cols):
    for row in range(num_rows):
        char = matrix[row][col]  # Get the character at position (row, col)
        if char.isalpha():  # If it's a letter, add to message
            decoded_message += char
        else:
            decoded_message += " "  # Replace symbols with spaces

# Replace multiple spaces with a single space to clean the message
import re
decoded_message = re.sub(r'\s+', ' ', decoded_message).strip()

# Print the final decoded message
print(decoded_message)
