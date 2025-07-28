CREATE DATABASE db_website; #cria o banco
USE crud_pdo; #seleciona o banco para ser usado

#cria tabela
CREATE TABLE usuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
nome VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL
);