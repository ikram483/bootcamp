/*1.Create 2 tables : Customer and Customer profile. They have a One to One relationship.*/
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE REFERENCES Customer(id) ON DELETE CASCADE
);
/*2.Insert those customers*/
INSERT INTO Customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');
select * from Customer
/*3.Insert those customer profiles, use subqueries*/
insert into customerprofile (isLoggedIn,customer_id) values
	(TRUE,(select id from Customer where first_name='John')),
	(FALSE, (select id from Customer where first_name='Jerome'));

/*4. Queries to Fetch Data*/
/*Get first names of LoggedIn customers*/
SELECT c.first_name 
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;
/*Get all customers and their login status (Include customers without profiles)*/
SELECT c.first_name, COALESCE(cp.isLoggedIn, FALSE) AS isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;
/*Count customers who are NOT logged in*/
SELECT COUNT(*)
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL;

 				/*Part II:*/

/*Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL*/
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);
/*Insert those book*/
INSERT INTO Book (title, author)
VALUES 
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');


/*Create table Student*/
CREATE TABLE Student(
student_id SERIAL PRIMARY KEY, 
name varchar(100) NOT NULL UNIQUE,
age INT CHECK (age <= 15)
);
/*insert into student*/
insert into Student (name,age)values
('John', '12'),
('Lera', '11'),
 ('Patrick', '10'),
 ('Bob', '14');

 /*Create a table  Library*/
CREATE TABLE Library (
    book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);
/*6.Add 4 records in the junction table, use subqueries.*/
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES 
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
 (SELECT student_id FROM Student WHERE name = 'John'), 
 '2022-02-15'),
/*7.Display the data*/
SELECT * FROM Library;

SELECT s.name, b.title 
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

SELECT AVG(s.age) 
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM Student WHERE name = 'Bob';

SELECT *FROM student






