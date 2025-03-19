/*1. Get a list of all languages from the language table.*/
SELECT *FROM language
/*2. Get a list of all films joined with their languages.*/
SELECT f.title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;
/*3. Get all languages, even if there are no films in those languages.*/
SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;
/*4. Create a new table called new_film*/
CREATE TABLE new_film (
id serial Primary key,
name varchar(255) not null
);
/*insert some movies into new_film*/
insert into new_film(name) values
('The Matrix'),
('Inception'),
('Titanic');
/*5. Create a new table called customer_review*/
create table customer_review(
review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/*6.Add 2 movie reviews. Make sure you link them to valid objects in the other tables.*/
insert into customer_review (film_id,language_id,title,score,review_text) values
(1, 1, 'Amazing Sci-Fi', 9, 'One of the best sci-fi movies ever!'),
(2, 2, 'Mind-Blowing', 10, 'Inception was an absolute masterpiece.');
/*7.Delete a film that has a review from the new_film table, what happens to the customer_review table?*/
DELETE from new_film where id =1;
select *from new_film
/*Since we defined ON DELETE CASCADE in customer_review.film_id,
deleting a film from new_film will automatically delete
all its associated reviews in customer_review. This ensures that no orphaned reviews remain.*/

