<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Login</title>
</head>
<body>
  <div class="background"></div>
  <div class="card">
    
    <h1 class="fonte">recupere sua senha</h1>
    
    <!-- Formulário de login -->
    <form action="" class="form" method="post">
      <!-- Correção: Adicionar o atributo 'name' para os inputs -->
      <input type="text" name="email" placeholder="email" required>
      <input type="password" name="senha" placeholder="nova senha" required>
      <input type="password" name="senha" placeholder="confirme sua senha" required>
      <input type="submit" name="botao" value="Entrar" class="home-btn">
    </form>

    <footer class="botao">
      <a href="login.php">voltar</a>
    </footer>
    <br>
  </div>
</body>
</html>