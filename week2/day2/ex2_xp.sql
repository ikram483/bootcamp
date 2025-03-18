/*Select all columns from the customer table*/
SELECT * FROM customer;
/*Display full names using an alias*/
SELECT first_name || ' ' || last_name AS full_name FROM customer;
/* Get all unique create_date values from customer table*/
SELECT DISTINCT create_date FROM customer;
/*Get customer details in descending order by first name*/
SELECT * FROM customer ORDER BY first_name DESC;
/*Get film details ordered by rental rate (ascending)*/
SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;
/*Get addresses and phone numbers of customers in Texas district*/
SELECT address, phone 
FROM address 
WHERE district = 'Texas';
/*Get all movies where film_id is either 15 or 150*/
SELECT * FROM film WHERE film_id IN (15, 150);
/*Find details of your favorite movie*/
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'The Matrix';
/*	Find movies starting with the first two letters of your favorite movie*/
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'Th%';

/*Find the 10 cheapest movies*/
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;
/*Find the next 10 cheapest movies (without using LIMIT)*/
SELECT * FROM film WHERE rental_rate > (
    SELECT MIN(rental_rate) FROM (
        SELECT DISTINCT rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10
    ) AS subquery
) ORDER BY rental_rate ASC LIMIT 10;
/*Get customer names, payment amounts, and dates, ordered by customer ID*/
SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;
/*Get all movies NOT in inventory*/
SELECT * FROM film WHERE film_id NOT IN (SELECT DISTINCT film_id FROM inventory);

/* Find which city is in which country*/
SELECT city.city, country.country 
FROM city 
JOIN country ON city.country_id = country.country_id;

/* Bonus: Get customer payment details ordered by staff ID*/
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id;

