def calculate_sum(x):
    # Convert X to string for easy repetition
    x_str = str(x)
    return int(x_str) + int(x_str*2) + int(x_str*3) + int(x_str*4)

# Test the function
x = int(input("Enter a number: "))
print(f"Result: {calculate_sum(x)}")
