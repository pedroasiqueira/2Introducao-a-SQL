/**
 * OPERADOR - DESCRIÇÃO
      =         IGUAL
      <>        DIFERENTE DE
      >         MAIOR QUE
      <         MENOR QUE
      >=        MAIOR QUE OU IGUAL A
      <=        MENOR QUE OU IGUAL A
      AND       OPERADOR LÓGICO E
      OR        OPERADOR LÓGICO OU
      IS        COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)
      NOT       NEGAÇÃO

NULO É DIFERENTE DE VAZIO
 */

/**
  ORDEM DOS OPERADORES

        PARÊNTESES 
            ↓
   MULTIPLICAÇÃO, DIVISÃO
            ↓ 
      SOMA, SUBTRAÇÃO
            ↓ 
           NOT 
            ↓
           AND
            ↓ 
           OR

SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

como o operador AND tem preferência sobre o operador OR, ele é avaliado primeiro. Sendo executado dessa forma:
    amount = 0.99 OR (amount = 2.99 AND staff_id = 2)

SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

O que tiver dentro dos parenteses será "resolvido" primeiro.
 */


/**
 * EXEMPLOS DE WHERE
 * 
 * 
      SELECT * FROM sakila.film
      WHERE length > 50
      ORDER BY length;

      SELECT * FROM sakila.film
      WHERE title <> "ALIEN CENTER"
      AND replacement_cost > 20;

      SELECT * FROM sakila.film
      WHERE rating = 'G'
      OR rating = 'PG'
      OR RATING = 'PG-13';

      SELECT * FROM sakila.rental
      WHERE return_date IS NULL;

      SELECT * FROM sakila.staff
      WHERE active IS TRUE;

      SELECT * FROM sakila.staff
      WHERE active IS NOT TRUE;

      SELECT * FROM sakila.address
      WHERE address2 IS NOT NULL;

      SELECT * FROM sakila.film
      WHERE title NOT LIKE 'academy%';
 */



/**
 * EXEMPLOS DE LIKE
 * 
     Para encontrar um filme que termina com "don"
     SELECT * FROM sakila.film
     WHERE title LIKE '%don';
     
     
     Para encontrar um filme que que se inicia com "plu"
     SELECT * FROM sakila.film
     WHERE title LIKE 'plu%';

     Para encontrar um filme que tenh "plu"
     SELECT * FROM sakila.film
     WHERE title LIKE '%plu%';

     Para encontrar um filme que inicia com "p" e termina com "r"
     SELECT * FROM sakila.film 
     WHERE title LIKE 'p%r';

     Para encontrar um filme que o segundo caractere da frase é "C"
     SELECT * FROM sakila.film 
     WHERE title LIKE '_C%';

     Para encontrar um filme que possui exataemente 8 caracteres
     SELECT * FROM sakila.film 
     WHERE title LIKE '________';

     Para encontrar todas as palavras com no mínimo 3 caraceres e que iniciam com E
     SELECT * FROM sakila.film 
     WHERE title LIKE 'E__%';

 */

/**
 * EXEMPLO DE IN
 * 
    Pesquisando nomes
    SELECT * FROM sakila.actor 
    WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');
 */

/**
 * EXEMPLO DE BETWEEN
 * 
    Trazendo resultas de números entre 50 e 120
    SELECT title, length FROM sakila.film 
    WHERE length BETWEEN 50 AND 120;

    Usando BETWEEN com strings
    SELECT * FROM sakila.language 
    WHERE name BETWEEN 'Italian' AND 'Mandarin' 
    ORDER BY name;

    Usando BETWEEN com datas
    SELECT rental_id, rental_date FROM sakila.rental 
    WHERE rental_date 
    BETWEEN '2005-05-27' AND '2005-07-17';
 */