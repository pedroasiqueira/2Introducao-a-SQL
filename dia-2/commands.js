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


// ===>>> LIMIT
// SELECT * FROM sakila.rental LIMIT 10;


// ===>>> LIMIT OFFSET
// SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

// ===>>> ORDER BY
// SELECT * FROM sakila.address
// ORDER BY address DESC;

// SELECT * FROM sakila.actor
// ORDER BY last_name, first_name DESC;
// last_name está em ordem ASC e first_name está em ordem DESC
// quando não coloca nenhum valor ele assimila o ASC



// EXEMPLO:
// 1- Selecione todos os dados da tabela.
// 2- Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição.
// 3- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
// SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
// ORDER BY length DESC, replacement_cost ASC
// LIMIT 20;


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