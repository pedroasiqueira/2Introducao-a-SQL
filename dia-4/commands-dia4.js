// INSERINDO DADOS EM UMA TABELA:
// INSERT INTO nome_da_tabela (coluna1, coluna2)
// VALUES ('valor_coluna1', 'valor_coluna2');
//
// INSERT INTO sakila.actor (first_name, last_name)
// VALUES('PEDRO','ALEXANDRE');

// INSERINDO VÁRIAS LINHAS DE UMA VEZ:
// INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
// ('valor_1','valor_2'),
// ('valor_3','valor_4'),
// ('valor_5','valor_6');


// INSERT SELECT --->>> Inserindo dados de uma outra tabela:
// INSERT INTO tabelaA (coluna1, coluna2)
//     SELECT tabelaB.coluna1, tabelaB.coluna2
//     FROM tabelaB
//     WHERE tabelaB.nome_da_coluna <> 'algumValor'
//     ORDER BY tabelaB.coluna_de_ordenação;
//
// INSERT INTO sakila.actor (first_name, last_name)
//     SELECT first_name, last_name FROM sakila.staff;


// DUVIDA - QUANDO SABER QUE VALOR TENHO QUE COLOCAR? EM UM DOS EXERCICIOS VI A "TABLE INSPECTOR", MAS TINHA UMA COLUNA QUE EU TINHA QUE COLOCAR UM VALOR E NÃO TINHA INFORMANDO AÍ.
// NÃO PODIA SER NULO MAS TBM NÃO PODIA SER UM VALOR ALEATÓRIO QUE EU QUIS