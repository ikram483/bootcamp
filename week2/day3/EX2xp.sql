/*1.Use UPDATE to change the language of some films. Make sure that you use valid languages.*/
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3); 
/*2.Which foreign keys (references) are defined for the customer table?
How does this affect the way in which we INSERT into the customer table?*/
SELECT conname, conrelid::regclass, confrelid::regclass
FROM pg_constraint
WHERE conrelid = 'customer'::regclass;
/*3.Drop the customer_review Table*/
DROP TABLE customer_review CASCADE;

SELECT *
FROM information_schema.referential_constraints
WHERE unique_constraint_name = 'customer_review_pkey';

/*4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet)*/
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;
/*5.Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)*/
SELECT f.film_id, f.title, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;
/*6️.Find the 4 movies for the friend*/
/*The 1st film*/
SELECT f.film_id, f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
AND f.description ILIKE '%sumo%';

/*The 2nd film*/
SELECT film_id, title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';

/*The 3rd film*/
SELECT f.film_id, f.title
FROM rental r
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

/*The 4th film*/
SELECT f.film_id, f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;






