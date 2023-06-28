// SELECT * FROM sakila.city;
// SELECT first_name, last_name FROM customer;
// SELECT * FROM sakila.rental;
// SELECT title, description, release_year FROM sakila.film;
// SELECT * FROM sakila.country;


// ===>>> CONCAT
// SELECT first_name, last_name FROM sakila.actor;
// SELECT CONCAT(first_name," ", last_name) AS "Nome Completo" FROM sakila.actor;
// SELECT CONCAT(title, ", ", release_year) AS "Lançamento do Filme" FROM sakila.film;
// SELECT CONCAT(address, ", ", district) AS "Endereço" FROM sakila.address;
// SELECT * FROM sakila.address;

// ===>>> DISTINCT
// SELECT DISTINCT Nome, Idade FROM Escola.Estudantes2;
// SELECT DISTINCT Nome FROM Escola.Estudantes2;
// SELECT DISTINCT Idade FROM Escola.Estudantes2;

// ===>>> COUNT
// SELECT COUNT(*) FROM sakila.actor;
// SELECT COUNT(first_name) FROM sakila.actor;
// SELECT COUNT(DISTINCT first_name) FROM sakila.actor;

// SELECT COUNT(*) FROM sakila.address;
// SELECT COUNT(address2) FROM sakila.address;

// SELECT COUNT(district) FROM sakila.address
// WHERE district = 'Alberta';

// SELECT COUNT(password) FROM sakila.staff;
// SELECT COUNT(staff_id) FROM sakila.staff;

// CRIANDO UMA TABELA
// CREATE DATABASE `Escola`;
// CREATE TABLE IF NOT EXISTS Escola.Estudantes (
//     `Nome` VARCHAR(7) CHARACTER SET utf8,
//     `Idade` INT
// );
// INSERT INTO Escola.Estudantes VALUES
//     ('Rafael', 25),
//     ('Amanda', 30),
//     ('Roberto', 45),
//     ('Carol', 19),
//     ('Amanda', 25);