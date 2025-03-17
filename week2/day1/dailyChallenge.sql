CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 0)
);
INSERT INTO actors (first_name,last_name,age) VALUES
('Leonardo', 'DiCaprio', 48),
('Scarlett', 'Johansson', 39),
('Morgan', 'Freeman', 86),
('Emma', 'Watson', 33);
SELECT COUNT(*) FROM actors;/*This will return the total number of actors in the table*/

INSERT INTO actors (first_name, last_name, age) 
VALUES (NULL, 'Smith', 40);/*ERROR: column "first_name" contains null value*/

SELECT * FROM actors

INSERT INTO actors (first_name, last_name, age) 
VALUES ('', 'Smith', 40);/*This will insert an empty string instead of NULL, which may not be ideal*/
INSERT INTO actors (first_name, last_name, age) 
VALUES ('John', 'Doe', -5);/*ERROR: new row for relation "actors" violates check constraint "actors_age_check"*/
/*age is a positive integer*/

