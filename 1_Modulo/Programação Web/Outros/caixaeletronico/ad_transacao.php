<?php
session_start();
require 'config.php';

if(isset($_POST['tipo'])){
    $valor = str_replace("," , ".", $_POST['valor']);
    $valor = floatval($valor);
    $tipo  = $_POST['tipo'];
    $id    = $_SESSION['banco'];
      $sql = "INSERT INTO historico (id_conta, tipo, valor, data_operacao)VALUES(:id_conta, :tipo, :valor, NOW())";

    $sql= $pdo->prepare($sql);
    $sql->bindValue(":id_conta", $id);
    $sql->bindValue(":tipo"    , $tipo);
    $sql->bindValue(":valor"   , $valor);

    $sql->execute();
 
    #deposito
    if($tipo == 0){
       
        $sql = "UPDATE contas SET saldo = saldo + :valor WHERE id = :id";
        $sql = $pdo->prepare($sql);
        $sql ->bindValue(":valor", $valor);
        $sql ->bindValue(":id"   , $id);
        $sql->execute();
    }else{
        #saque/retirada 
        $sql = "UPDATE contas SET saldo = saldo - :valor WHERE id = :id";
        $sql = $pdo->prepare($sql);
        $sql ->bindValue(":valor", $valor);
        $sql ->bindValue(":id"   , $id);
        $sql ->execute();
    }

}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        Tipo de Transação: <br><br>
        <select name="tipo">
            <option value="0">Depósito</option>
            <option value="1">Retirada</option>
        </select><br><br>
        Valor: <br>
        <input type="text" name="valor" patern="[0-9.,]{1,}"> <br><br>
        <input type="submit" value="Adicionar">
    </form>
    <a href="index.php">
        <button>Voltar</button>
    </a>
    
</body>
</html>




