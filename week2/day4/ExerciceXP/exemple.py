from menu_manager import MenuManager


item = MenuManager.get_by_name('Beef Stew')
if item:
    print("Item found:", item)
else:
    print("Item not found.")
        
items = MenuManager.all_items()
print("All items:", items)