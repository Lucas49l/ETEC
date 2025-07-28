<?php
try {
    $dns    = "mysql:dbname=caixaeletronico;host=localhost";
    $dbUser = "root";
    $dbPass = "";

    $pdo = new PDO($dns, $dbUser, $dbPass);
} catch (\PDOException $erro) {
    echo "Banco indisponivel, tente mais tarde";
}