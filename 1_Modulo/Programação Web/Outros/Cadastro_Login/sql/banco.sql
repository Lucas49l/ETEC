/*Criar banco*/
CREATE DATABASE IF NOT EXISTS cadastro;
USE cadastro; /*Usar o banco cadatro*/

/*criar tabela dentro do banco cadastro*/
CREATE TABLE IF NOT EXISTS USUARIO(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    SENHA VARCHAR(255) NOT NULL
);

/*Importe o banco para o phpMyAdmim*/