<?php
    $nomeInput = $_POST = ["nomeUsuario"];
    $emailInput = $_POST = ["email"];
    $senhaInput= $_POST = ["senha"];

  $cadastro1 = new loginDados($nomeInput,$emailInput, $senhaInput)
  
  class loginDados {
    public $name;
    public $email;
    public $senha;

  function __construct($name) {
    $this->name = $name;
    $this->email = $email;
    $this->senha = $senha;
  }
  
  function get_nome() {
    return $this->$name;
  }
  function get_email() {
    return $this->$email;
  }
  function get_senha() {
    return $this->$senha;
  }
}
echo $cadastro1->get_nome();
echo $cadastro1->get_email();
echo $cadastro1->get_senha();
?>
