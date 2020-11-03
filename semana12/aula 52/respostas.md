1 A-) o comando 
ALTER TABLE Actor DROP COLUMN salary;
remove a coluna salary da tabela

B -) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); 
muda o nome da coluca gender para sex do typo varchar 6

C -) Muda a tabela gender para varchar(255)


5 A-) ele retorna o numero de atores separados por genero

###################################################################################

use mello_ronaldo_jonson;

CREATE TABLE Actor (
	id int PRIMARY KEY,
    full_name varchar(255) NOT NULL,
    gender varchar(10)
);

CREATE TABLE Movie (
	id int PRIMARY KEY,
    full_name varchar(255) NOT NULL,
    playing_limit_date date,
    rating varchar(10)
);

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET full_name = "Moacyr Franco"
WHERE id = "003";

UPDATE Actor
SET full_name = "JULIANA PÃES"
WHERE full_name = "Juliana Paes";

UPDATE Actor
SET 
	full_name = "JULIANA PÃES",
	gender = "none"
WHERE id = "005";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

DELETE FROM Movie WHERE id = "001";

SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

SELECT AVG(rating) FROM Movie;

SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();

SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();

SELECT MIN(rating) FROM Movie;

SELECT * FROM Movie ORDER BY title;

SELECT * FROM Movie ORDER BY title LIMIT 5;

SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;