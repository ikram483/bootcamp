my_fav_numbers = {7, 21, 42}
my_fav_numbers.add(99)
my_fav_numbers.add(55)
my_fav_numbers.remove(55)
friend_fav_numbers = {5, 11, 42}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Mes numéros préférés :", my_fav_numbers)
print("Les numéros préférés de mon ami :", friend_fav_numbers)
print("Nos numéros préférés ensemble :", our_fav_numbers)
