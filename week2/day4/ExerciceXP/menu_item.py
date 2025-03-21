import psycopg2
from menu_manager import MenuManager

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        connection = psycopg2.connect(
            dbname="DAY4",
            user="postgres",
            password="M53073607",
            host="localhost"
        )
        cursor = connection.cursor()
        query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
        cursor.execute(query, (self.name, self.price))
        connection.commit()
        cursor.close()
        connection.close()
        print(f"'{self.name}' added successfully!")

    def delete(self):
        connection = psycopg2.connect(
            dbname="DAY4",
            user="postgres",
            password="M53073607",
            host="localhost"
        )
        cursor = connection.cursor()
        query = "DELETE FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (self.name,))
        connection.commit()
        cursor.close()
        connection.close()
        print(f"'{self.name}' deleted successfully!")

    def update(self, new_name=None, new_price=None):
        connection = psycopg2.connect(
            dbname="DAY4",
            user="postgres",
            password="M53073607",
            host="localhost"
        )
        cursor = connection.cursor()

        try:
            if new_name and new_price:
                query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
                cursor.execute(query, (new_name, new_price, self.name))
                self.name = new_name
                self.price = new_price
            elif new_name:
                query = "UPDATE Menu_Items SET item_name = %s WHERE item_name = %s"
                cursor.execute(query, (new_name, self.name))
                self.name = new_name
            elif new_price:
                query = "UPDATE Menu_Items SET item_price = %s WHERE item_name = %s"
                cursor.execute(query, (new_price, self.name))
                self.price = new_price
            else:
                print("Nothing to update.")
                return

            connection.commit()
            print(f"'{self.name}' updated successfully!")
        except Exception as e:
            print("Error during update:", e)
        finally:
            cursor.close()
            connection.close()


### menu_manager.py
import psycopg2

class MenuManager:
    DATABASE_CONFIG = {
        'dbname': 'DAY4',
        'user': 'postgres',
        'password': 'M53073607',
        'host': 'localhost',
        'port': '5432'
    }

    @classmethod
    def get_connection(cls):
        return psycopg2.connect(**cls.DATABASE_CONFIG)

    @classmethod
    def get_by_name(cls, item_name):
        connection = cls.get_connection()
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (item_name,))
        result = cursor.fetchone()
        cursor.close()
        connection.close()
        if result:
            return {"item_id": result[0], "item_name": result[1], "item_price": result[2]}
        return None

    @classmethod
    def all_items(cls):
        connection = cls.get_connection()
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items"
        cursor.execute(query)
        results = cursor.fetchall()
        cursor.close()
        connection.close()
        return [{"item_id": row[0], "item_name": row[1], "item_price": row[2]} for row in results]


### menu_editor.py
from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
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
    item_name = input("Enter the item name: ").strip()
    item = MenuManager.get_by_name(item_name)
    if item:
        print(f"\nItem Found: {item}")
    else:
        print("Item not found in the menu.")

def add_item_to_menu():
    item_name = input("Enter item name: ").strip()
    try:
        item_price = float(input("Enter item price: "))
        new_item = MenuItem(item_name, item_price)
        new_item.save()
    except ValueError:
        print("Invalid price. Please enter a number.")

def remove_item_from_menu():
    item_name = input("Enter the name of the item to remove: ").strip()
    item_data = MenuManager.get_by_name(item_name)
    if item_data:
        item = MenuItem(item_data['item_name'], item_data['item_price'])
        item.delete()
    else:
        print("Error: Item not found in the menu.")

def update_item_from_menu():
    old_name = input("Enter the current item name: ").strip()
    item_data = MenuManager.get_by_name(old_name)
    if item_data:
        item = MenuItem(item_data['item_name'], item_data['item_price'])
        new_name = input("Enter new item name (or press Enter to keep the same name): ").strip()
        try:
            new_price_input = input("Enter new item price (or press Enter to keep the same price): ").strip()
            new_price = float(new_price_input) if new_price_input else item_data['item_price']
            item.update(new_name or old_name, new_price)
        except ValueError:
            print("Invalid price. Please enter a valid number.")
    else:
        print("Error: Item not found in the menu.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\n--- Restaurant Menu ---")
        for item in items:
            print(item)
    else:
        print("The menu is empty.")

if __name__ == "__main__":
    show_user_menu()
