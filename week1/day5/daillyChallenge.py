import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        """
        Initialize a Circle object. The user can provide either a radius or a diameter.
        If only the diameter is given, the radius is calculated.
        """
        if radius:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either a radius or a diameter")

    @property
    def area(self):
        """Compute and return the area of the circle"""
        return math.pi * (self.radius ** 2)

    def __str__(self):
        """Dunder method to print the circle details"""
        return f" Circle(Radius: {self.radius}, Diameter: {self.diameter}, Area: {self.area:.2f})"

    def __add__(self, other):
        """Add two circles by adding their radii, returning a new Circle"""
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        raise TypeError("You can only add Circle objects together")

    def __eq__(self, other):
        """Compare if two circles are equal (same radius)"""
        return self.radius == other.radius

    def __lt__(self, other):
        """Compare if this circle is smaller than another circle"""
        return self.radius < other.radius

    def __le__(self, other):
        """Compare if this circle is smaller than or equal to another circle"""
        return self.radius <= other.radius

#   Example Usage
c1 = Circle(radius=5)
c2 = Circle(diameter=16)  # Automatically calculates radius = 8
c3 = Circle(radius=3)

print(c1)  #  Circle(Radius: 5, Diameter: 10, Area: 78.54)
print(c2)  #  Circle(Radius: 8, Diameter: 16, Area: 201.06)

#  Adding two circles
c4 = c1 + c2  # New circle with radius 13
print(c4)  #  Circle(Radius: 13, Diameter: 26, Area: 530.93)

#  Sorting Circles
circle_list = [c1, c2, c3, c4]
sorted_circles = sorted(circle_list)  # Sort by radius (smallest to largest)
print("\n Sorted Circles:")
for circle in sorted_circles:
    print(circle)

#  Comparisons
print(f"c1 == c2? {c1 == c2}")  # False
print(f"c1 < c2? {c1 < c2}")  # True (5 < 8)


#Bonus
def draw_circle(radius, x, y):
    """Draws a circle using Turtle"""
    turtle.penup()
    turtle.goto(x, y - radius)  # Move to correct position
    turtle.pendown()
    turtle.circle(radius)  # Draw the circle

turtle.speed(0)

# Draw sorted circles at different positions
x_pos = -200
for circle in sorted_circles:
    draw_circle(circle.radius * 10, x_pos, 0)  # Scale radius for visualization
    x_pos += 100  # Shift position

turtle.done()