CREATE TABLE items (
 id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL
);
create table customers (
 id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);
INSERT INTO items (name, price) VALUES 
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

 INSERT INTO customers (first_name,last_name) VALUES
 ('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');
select * from items
SELECT * FROM items WHERE price > 80;
SELECT * FROM items WHERE price <= 300;
SELECT * FROM customers WHERE last_name ='smith';
/*No rows found, because no customer has the last name "Smith*/
SELECT * FROM customers WHERE last_name ='Jones';
SELECT * FROM customers WHERE last_name <>'Scott';
SELECT * FROM customers WHERE lower(first_name) <> 'scott';









