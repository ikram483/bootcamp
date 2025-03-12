#Convert the two following lists, into dictionaries.
#Hint: Use the zip method
#keys = ['Ten', 'Twenty', 'Thirty']
#values = [10, 20, 30]

# Given lists
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# Convert to dictionary using zip()
result_dict = dict(zip(keys, values))

# Print the result
print(result_dict)
