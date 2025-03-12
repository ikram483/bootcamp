import random

# Class definition
class MyList:
    def __init__(self, letters):
        """Initialize the list with letters"""
        self.letters = letters

    def reverse_list(self):
        """Return the reversed list"""
        return self.letters[::-1]

    def sorted_list(self):
        """Return the sorted list"""
        return sorted(self.letters)

    def generate_random_list(self):
        """Generate a list of random numbers of the same length as self.letters"""
        return [random.randint(1, 100) for _ in range(len(self.letters))]

# Creating an object
mylist = MyList(['d', 'a', 'c', 'b'])

# Testing methods
print("Original List:", mylist.letters)
print("Reversed List:", mylist.reverse_list())
print("Sorted List:", mylist.sorted_list())
print("Random List:", mylist.generate_random_list())
