<?php
    $name = $email = $senha= "";
    $nameVazio = $emailVazio = $senhaVazio = "";

//verificar se o campo está vazio
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Nome requirido";
  } else {
    $name = test_input($_POST["name"]);
  }


?>
