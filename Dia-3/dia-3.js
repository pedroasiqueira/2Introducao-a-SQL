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