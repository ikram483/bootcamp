# Restaurant Menu Manager Class
class MenuManager:
    def __init__(self):
        """Initialize the menu with predefined dishes"""
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5 , "spice": "C ", "gluten": False},
            {"name": "Beef Bourgu", "price": 25, "spice": "B", "gluten": True},
        ]

    def add_item(self, name, price, spice, gluten):
        """Add a new dish to the menu"""
        new_dish = {"name": name, "price": price, "spice": spice, "gluten": gluten}
        self.menu.append(new_dish)
        print(f" {name} has been added to the menu!")

    def update_item(self, name, price, spice, gluten):
        """Update an existing dish in the menu"""
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f" {name} has been updated!")
                return
        print(f" {name} is not in the menu!")

    def remove_item(self, name):
        """Remove a dish from the menu"""
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(f" {name} has been removed from the menu!")
                return
        print(f" {name} is not in the menu!")

    def display_menu(self):
        """Display all menu items in a formatted way"""
        print("\n Restaurant Menu ")
        print("-" * 30)
        for dish in self.menu:
            gluten_status = "Yes" if dish["gluten"] else "No"
            print(f"{dish['name']:15} |  Price: ${dish['price']} |  Spice: {dish['spice']} |  Gluten: {gluten_status}")
        print("-" * 30)

#  Testing the Menu Manager
if __name__ == "__main__":
    menu = MenuManager()

    # Display initial menu
    menu.display_menu()

    # Adding a new item
    menu.add_item("Pizza", 20, "B", True)

    # Updating an existing item
    menu.update_item("Soup", 12, "A", False)

    # Removing an item
    menu.remove_item("Salad")

    # Display final menu
    menu.display_menu()
