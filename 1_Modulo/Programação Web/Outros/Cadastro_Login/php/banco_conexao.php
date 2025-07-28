<?php
$host = "localhost"; //local do banco no xampo
$usuario = "root"; //usuario padrão no xamp
$senha = ""; // senha vazia or padrão
$banco = "cadastro"; //nome do banco

//Cria a conexão 
$conn= new mysqli($host, $usuario, $senha, $banco);
$conn->set_charset("utf8");

//Verifica de deu erro
if ($conn->connect_error){
    echo "Falha na conexão" . $conn->connect_error;
}

?>