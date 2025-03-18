/*Get all items ordered by price (lowest to highest)*/
SELECT * FROM items ORDER BY price ASC;
/*Get items with price ≥ 80, ordered by price (highest to lowest)*/
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
/*Get the first 3 customers in alphabetical order (A-Z), excluding primary key*/
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;
/*Get all last names in reverse alphabetical order (Z-A)*/
SELECT last_name FROM customers ORDER BY last_name DESC;

