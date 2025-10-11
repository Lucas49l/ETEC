<?php
    $requisicao = $_POST [requisicao];
    
    switch($requisicao){
        case 'Atualizar':
            include 'AtualizarUsuario.php';
            break;
        case 'Cadastrar:':
            include 'cadastrarUsuario.php';
            break;
        case 'Consultar':
            include 'consultarUsuario.php';
            break;
        case 'Remover':
            include 'removerUsuario.php';
            break;
        default:
            echo "Opção inválida.";
            break;
    }
?>