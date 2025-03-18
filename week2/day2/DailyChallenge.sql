CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab
                  /*Q1: What will be the OUTPUT of the following statement?*/
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

SELECT id FROM SecondTab WHERE id IS NULL;

/* Expected Output: 0 (No rows match because NOT IN (NULL) always returns FALSE.)*/

                 /*Q2: What will be the OUTPUT of the following statement?*/
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

SELECT id FROM SecondTab WHERE id = 5;

/*Expected Output: 2 (IDs 6 and 7 match.)*/

				/*Q3: What will be the OUTPUT of the following statement?*/
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab );


SELECT id FROM SecondTab;
/*Expected Output: 0 (No rows match because NULL in NOT IN makes the condition return FALSE.)*/

				/*Q4: What will be the OUTPUT of the following statement?*/
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );

SELECT id FROM SecondTab WHERE id IS NOT NULL;
/*Expected Output: 2 (IDs 6 and 7 match.)*/