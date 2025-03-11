def make_shirt(size="Large", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

# Call with default values
make_shirt()
make_shirt("Medium")
make_shirt("Small", "Hello World!")

# Using keyword arguments
make_shirt(size="XL", message="Python Rocks!")
