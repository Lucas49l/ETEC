<?php
session_start();
require 'config.php';

if(isset($_SESSION['banco'])){
    $id = $_SESSION['banco'];
    
    $sql = "SELECT * FROM contas WHERE id = :id";
    $sql = $pdo->prepare($sql);
    $sql->bindValue(":id", $id);

    $sql->execute();

    if($sql->rowCount() > 0){
        $dados = $sql->fetch();
    }
}else{
    header("Location:login.php");
    exit;
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caixa Eletronico</title>
</head>
<body>
    <h1>BANCO FABANK</h1>

    Titular  : <?php echo "<b>".$dados['titular']; ?></b></br>
    Agencia  : <?php echo "<b>".$dados['agencia']; ?></b></br>
    Conta    : <?php echo "<b>".$dados['conta'  ]; ?></b></br>
    Saldo  R$: <?php echo "<b>".number_format($dados['saldo'  ],2,',', ''); ?></b></br>
    <hr>
    <h3>Movimentação/Extrato</h3>
    <a href="ad_transacao.php">Adicionar Transação</a><br><br>
    <table border = "1" width "400">
        <tr>
            <th>Data</th>
            <th>Valor</th>
        </tr>
        <?php
        #passo 1 criar a variavel com a consulta
        $sql = "SELECT *FROM historico WHERE id_conta = :conta";

        #passo 2 acessar o metodo prepare passando a consulta
        $sql = $pdo->prepare($sql);

        #passo 3 usar o bindValue um para cada apelido 
        $sql->bindValue(":conta", $id);
        
        #passo 4 executar o comando
        $sql->execute();

        if($sql->rowCount() > 0){
            foreach($sql->fetchAll() as $item){
                ?>
                <tr>
                    <td style= "text-align:center;vertical-align:middle">
                        <?php echo date('d/m/Y H:i', strtotime($item['data_operacao']));?>
                    </td>
                    <td style="text-align:center;vertical-align:middle">
                        <?php 
                            if($item['tipo'] == 0) : ?>
                                <font color="green"><strong>R$ <?php echo number_format($item['valor'], 2, ',', '');?></strong></font>
                        <?php
                            else:?>
                                <font color="red"><strong>R$ <?php echo number_format($item['valor'], 2, ',', '');?></strong></font>   
                        <?php
                            endif;
                        ?>    
                    </td>    
                </tr>            
                <?php
            }
    echo"</table>";
    }
    ?>
</body>
</html>








