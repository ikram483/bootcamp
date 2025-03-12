import math

# Class definition
class Circle:
    def __init__(self, radius=1.0):
        """Initialize the circle with a radius (default is 1.0)"""
        self.radius = radius

    def compute_perimeter(self):
        """Calculate and return the perimeter of the circle"""
        return 2 * math.pi * self.radius

    def compute_area(self):
        """Calculate and return the area of the circle"""
        return math.pi * (self.radius ** 2)

    def definition(self):
        """Print the definition of a circle"""
        return "A circle is a shape with all points equidistant from its center."

# Creating a Circle object
circle1 = Circle(3)

# Printing perimeter, area, and definition
print(f"Perimeter: {circle1.compute_perimeter():.2f}")
print(f"Area: {circle1.compute_area():.2f}")
print(circle1.definition())
