from menu_item import MenuItem  
from menu_manager import MenuManager

def show_user_menu():
    """Display the menu options and handle user input. """
    while True:
        print("\n--- Restaurant Menu Editor ---")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Full Menu")
        print("E - Exit")

        user_choice = input("Choose an option: ").strip().upper()

        if user_choice == 'V':
            view_item()
        elif user_choice == 'A':
            add_item_to_menu()
        elif user_choice == 'D':
            remove_item_from_menu()
        elif user_choice == 'U':
            update_item_from_menu()
        elif user_choice == 'S':
            show_restaurant_menu()
        elif user_choice == 'E':
            print("\nExiting the program... Here is the final menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid option! Please choose again.")

def view_item():
    """
    View a single item by name.
    """
    item_name = input("Enter the item name: ").strip()
    item = MenuManager.get_by_name(item_name)
    
    if item:
        print(f"\nItem Found: {item}")
    else:
        print("Item not found in the menu.")

def add_item_to_menu():
    """
    Add a new item to the menu.
    """
    item_name = input("Enter item name: ").strip()
    try:
        item_price = float(input("Enter item price: "))
        new_item = MenuItem(item_name, item_price)
        new_item.save()
        print(f" '{item_name}' was added successfully.")
    except ValueError:
        print(" Invalid price. Please enter a valid number.")

def remove_item_from_menu():
    """
    Remove an item from the menu.
    """
    item_name = input("Enter the name of the item to remove: ").strip()
    item = MenuItem.get_by_name(item_name)

    if item:
        item.delete()
        print(f" '{item_name}' was removed successfully.")
    else:
        print(" Error: Item not found in the menu.")

def update_item_from_menu():
    """
    Update an item's name and/or price.
    """
    old_name = input("Enter the current item name: ").strip()
    item = MenuItem.get_by_name(old_name)

    if item:
        new_name = input("Enter new item name (or press Enter to keep the same name): ").strip()
        try:
            new_price = float(input("Enter new item price: "))
            item.update(new_name or old_name, new_price)
            print(f" '{old_name}' was updated successfully.")
        except ValueError:
            print(" Invalid price. Please enter a valid number.")
    else:
        print(" Error: Item not found in the menu.")

def show_restaurant_menu():
    """
    Show all items in the restaurant menu.
    """
    items = MenuManager.all_items()
    if items:
        print("\n--- Restaurant Menu ---")
        for item in items:
            print(item)
    else:
        print("The menu is empty.")


if __name__ == "__main__":
    show_user_menu()
