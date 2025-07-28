<?php
session_start();
require 'config.php';

if( isset($_POST['agencia']) && !empty($_POST['agencia']) ){
    $agencia = $_POST['agencia'];
    $conta   = $_POST['conta'];
    $senha   = $_POST['senha'];
    //passo 1
    $sql = "SELECT *FROM contas WHERE agencia = :a AND  conta = :c AND senha = :s";
    
    //passo2
    $sql = $pdo->prepare($sql);

    //passo3
    $sql->bindValue(":a", $agencia);
    $sql->bindValue(":c", $conta);
    $sql->bindValue(":s", md5($senha));
    //passo4
    $sql->execute();

    if($sql->rowCount() > 0){
        $dados = $sql->fetch();
        $_SESSION['banco'] = $dados['id'];
       
        header('Location:index.php');
    }
    
}

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de login</title>
</head>
<body>
    <form action="" method = "post">
        Agencia:<br/>
        <input type="text" name = "agencia"><br/><br/>

        Conta:<br/>
        <input type="text" name = "conta"><br/><br/>
        
        Senha: <br/>
        <input type="password" name = "senha"><br/><br/>

        <input type="submit" value = "Entrar">
    </form>
    
</body>
</html>