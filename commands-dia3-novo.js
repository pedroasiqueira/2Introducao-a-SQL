// SELECT * FROM sakila.rental
// WHERE rental_date LIKE "2005-05-26 00:07:11";

// SELECT * FROM sakila.rental
// WHERE return_date BETWEEN "2005-05-26" AND "2005-06-27";

// SELECT * FROM sakila.actor
// WHERE first_name LIKE '%rey%';

// SELECT * FROM sakila.actor
// WHERE first_name LIKE 'B__';

// -- Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
// SELECT DATE(rental_date) AS Data,
// YEAR(rental_date) AS Ano,
// MONTH(rental_date) AS Mes,
// DAY(rental_date) AS Dia,
// HOUR(rental_date) AS Hora,
// MINUTE(rental_date) AS Minuto,
// SECOND(rental_date) AS Segundo
// FROM sakila.rental
// WHERE rental_id = 10330;



// SELECT * FROM sakila.film
// WHERE rental_duration = 6 AND (rating = "R" OR rating = "PG-13")
// ORDER BY rental_duration;

// SELECT * FROM sakila.film
// WHERE title IN ('AFFAIR PREJUDICE','AFRICAN EGG','AGENT TRUMAN','AIRPLANE SIERRA');

// SELECT * FROM sakila.film
// WHERE title NOT IN ('AFFAIR PREJUDICE','AFRICAN EGG','AGENT TRUMAN','AIRPLANE SIERRA');

// SELECT title, length FROM sakila.film 
// WHERE length BETWEEN 120 AND 150;

// -- Exercicios do course

// -- O setor financeiro quer saber título, descrição, ano de lançamento, classificação etária (rating) e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título.
// SELECT title, description, release_year, rating, replacement_cost FROM sakila.film
// WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
// ORDER BY replacement_cost DESC, title LIMIT 100
// ;

// -- Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título.
// SELECT * FROM sakila.film
// WHERE rating = 'NC-17'
// ORDER BY rental_rate, title LIMIT 50;




// -- Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org
// SELECT * FROM sakila.customer
// WHERE email LIKE "LEONARD.SCHOFIELD@sakilacustomer.org";

// -- Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 e não inclua o cliente KENNETH no resultado
// SELECT first_name FROM sakila.customer
// WHERE active LIKE 0 AND store_id LIKE 2 AND first_name NOT IN ("KENNETH")
// ORDER BY first_name;

// -- Quantos clientes estão ativos e na loja 1
// SELECT COUNT(*) FROM sakila.customer
// WHERE active = 1 AND store_id = 1;

// -- Mostre todos os detalhes dos clientes que não estão ativos na loja 1
// SELECT * FROM sakila.customer
// WHERE active = 0 AND store_id = 1;

// -- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética. 
// SELECT first_name, last_name, email FROM sakila.customer
// WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
// ORDER BY first_name;

// -- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética. 
// SELECT email from sakila.customer
// WHERE address_id BETWEEN 172 AND 176;

// -- Exercicios de "LIKE" do course
// -- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome
// SELECT * FROM sakila.film
// WHERE title LIKE "%ace%";

// -- Mostre todos os detalhes dos filmes cujas descrições finalizam com china
// SELECT * FROM sakila.film
// WHERE description LIKE "%china";

// -- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord
// SELECT * FROM sakila.film
// WHERE description LIKE "%girl%" AND title LIKE "%lord";

// -- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon
// SELECT * FROM sakila.film
// WHERE title LIKE "___gon%";

// -- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
// SELECT * FROM sakila.film
// WHERE title LIKE "___gon%" AND description LIKE "%Documentary%";

// -- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
// SELECT * FROM sakila.film
// WHERE title LIKE "%academy" OR title LIKE "mosquito%";

// -- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
// SELECT * FROM sakila.film
// WHERE description LIKE "%monkey%" AND description LIKE "%sumo%";

// -- Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título. 
// SELECT title, release_year, rental_duration FROM sakila.film
// WHERE rental_duration BETWEEN 3 AND 6
// ORDER BY rental_duration DESC, title;

// -- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título. 
// SELECT title, rating FROM sakila.film
// WHERE rating IN ('G', 'PG', 'PG-13')
// ORDER BY title LIMIT 500;

// -- Exercicios do course
// -- Como você faria, então, para encontrar, usando o IN, todos os detalhes sobre o aluguel dos clientes com os seguintes ids: 269, 239, 126, 399, 142?
// SELECT * FROM sakila.payment
// WHERE payment_id IN (269, 239, 126, 399, 142);

// -- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano. 
// SELECT COUNT(*) quantidade_de_pagamentos FROM sakila.payment
// WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

// -- Quantos pagamentos temos com a data de retorno 2005-05-25?
// SELECT COUNT(*) quantidade_de_pagamentos FROM sakila.payment
// WHERE DATE(payment_date) LIKE '2005-05-25';

// -- Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
// SELECT COUNT(*) quantidade_de_pagamentos FROM sakila.payment
// WHERE DATE(payment_date) BETWEEN '2005-07-1' AND '2005-08-22';

// -- Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
// SELECT COUNT(*) FROM sakila.payment
// WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;

// -- Exercicios do course
// -- Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas?
// SELECT * FROM sakila.address
// WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');