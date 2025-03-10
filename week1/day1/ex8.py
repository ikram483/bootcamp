sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich",
    "Pastrami sandwich"
]

print("La charcuterie n'a plus de pastrami.")

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
    print(f"I made your {sandwich.lower()}.")

print("\nTous les sandwichs préparés :", finished_sandwiches)
        