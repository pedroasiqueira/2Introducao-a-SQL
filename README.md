# Instalando MySQL Server com Docker
<details>
<summary><strong>Executando um container com MySQL</strong></summary><br>

- Criando e iniciando um container <strong>MySQL</strong>
<br>

 ```bash
 docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:8.0.31
 ```
<details>

<summary><strong>O que está sendo feito acima</strong></summary>
<strong>-name</strong>: Nomeia um container

<details><summary><strong>-e</strong>: Utilizada para informar variáveis de ambiente.</summary>

  - (Aqui vamos manter o usuário padrão <i>root</i> que é recomendado pela documentação, e então, passaremosa variável <i>MYSQL_ROOT_PASSWORD=senha-mysql</i> para poder usar dentro do container)

</details>
<strong>-d</strong>: faz com que o container rode em segundo plano
<details><summary><strong>-p</strong>: indica qual porta no nosso SO o docker estará em funcionamento.</summary>

  - Lado esquerdo é a porta do nosso sistema que receberá o container.
  - Lado direito é a porta do container.
  
  ➡️<strong>Lembrando que 3306 é a porta padrão do MySQL</strong>

</details>
</details><br>

 </details> 
 <details>
 <summary><strong>Parando container</strong></summary>

 ```bash
 docker container stop container-mysql
 ```
 </details>
<details>
 <summary><strong>Iniciando container</strong></summary>

 ```bash
 docker container start container-mysql
 ```
 </details>
 <details>
 <summary><strong>Removendo container</strong></summary>

 ```bash
docker container rm container-mysql
 ```
 </details><br>

 # MySQL na linha de comando
<details>
 <summary>Para visualizar quais bancos de dados estão disponíveis, através do modo interativo do docker, acesse o terminal do container-mysql</summary>

 ```bash
 docker exec -it container-mysql bash
 ```
´ </details>
 <details>
 <summary>Agora já no terminal, utilizamos o usuário <i>root</i>, pois é o padrão da imagem do <b>MySQL</b> e lembre de usar a mesma senha usada na criação do container</summary>

 ```bash
 mysql -u root -p
 ```
- senha: `senha-mysql`
 </details>
 <details>
 <summary>Ver todo os bancos de dados que estão instalados atualmente</summary>

 ```sql
 SHOW DATABASES;
 ```
 - Não esquecer do PONTO E VIRGULA. ';'
 - Maiúsculas
 </details>
 
 ## Comandos mais comuns:
 <details>
 <summary> 
 Comando `USE` serve para definir a <strong>referência do banco de dados que será utilizado na query</strong>
 </summary>

 ```sql
  USE nome_do_banco_de_dados_que_quero_conectar;
 -- EX: USE trybe;
 ```
 </details>
  <details>
 <summary> 
 Para retornar todas as tabelas inicializadas no seu server
 </summary>

  ```sql
SHOW TABLES;
 ```
  </details>
  <details>
 <summary> 
 Visualizar estrutura de uma tabela
 </summary>

  ```sql
DESCRIBE nome_da_tabela;
-- EX: DESCRIBE students;
 ```
  </details>
  <details>
 <summary> 
 Criar um banco de dados
 </summary>

  ```sql
CREATE DATABASE nome_do_banco_de_dados;
-- EX: CREATE DATABASE trybe;
 ```
  </details>