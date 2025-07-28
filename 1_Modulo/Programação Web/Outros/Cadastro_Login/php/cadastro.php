<?php 
/*Puxar a conexão para usar cadastro, assim pode-se usar usar o banco*/
include 'banco_conexao.php';

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    /*Pegar os dados enviados pelo cadastro*/
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    /*Proteger a senha*/
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    //query
    $sql = "INSERT INTO usuario (nome, email, senha) VALUES (?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nome, $email, $senhaHash);

    //execução
    if($stmt->execute()) {
        echo 'Cadastro bem sucedido';
    }else{
        echo 'Erro ao cadastrar' . $stmt->error;
    }
    $stmt->close();
    $conn->close();
}
?>