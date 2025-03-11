from datetime import datetime

def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def draw_cake(num_candles):
    candles = "i" * num_candles
    print(f"       ___{candles}___")
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")

birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

try:
    birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")

    current_year = datetime.now().year
    age = current_year - birthdate.year

    num_candles = age % 10 or 1  
    if is_leap_year(birthdate.year):
        print("\n You were born in a leap year! Here are TWO cakes! \n")
        draw_cake(num_candles)
        print() 
        draw_cake(num_candles)
    else:
        print("\n Here is your birthday cake! \n")
        draw_cake(num_candles)

except ValueError:
    print("\n Invalid date format! Please enter in DD/MM/YYYY format.")
