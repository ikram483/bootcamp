print("challenge1")
number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))
multiples_list = [number * i for i in range(1, length + 1)]

print(multiples_list)

print("challenge2")
print("")
word = input("Enter a word: ")

new_word = "".join([word[i] for i in range(len(word)) if i == 0 or word[i] != word[i - 1]])

print(new_word)

