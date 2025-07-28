
<?php
    /*
    <?php
        Bloco de Código
    ?> 
    cria um codigo em php
    */
    //$nome ="" cria uma variavel em php
    //$nome = $_POST = ["nomeUsuario"] similar ao pegar um id do html no javaScript;
    $nome = $_POST = ["nomeUsuario"]; //armazena o Nome do usuario
    $senha = $_post = ["senhaUsuario"]; //Armazena a Senha do usuário

    if(($nome = "nome") && ($senha = "senha")){
        //echo = consoloe.log em javascript
        echo "<h1>Olá $nome, Seja bem vindo!</h1>";
    }else{
        echo "<h1>Usuário ou senha incorreta</h1>";
    }
?>