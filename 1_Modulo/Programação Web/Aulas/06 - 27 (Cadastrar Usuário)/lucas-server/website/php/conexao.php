<?php
//codigo php

    $host ="localhost";
    $nomeBanco ="db_website"; //local do banco
    $usuario = "root"; //
    $senha = "";
    
    //criar objeto de conexão com o banco
    try{
        $conexao = new PDO(
            "mysql:host=$host;
            dbname=$nomeBanco;charset=UTF8",
            $usuario,
            $senha
        );
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Conexão realizada com sucesso";
    }catch(PDOException $e){
        echo "ERRO: " . $e->getMessage();
    }
 
?>