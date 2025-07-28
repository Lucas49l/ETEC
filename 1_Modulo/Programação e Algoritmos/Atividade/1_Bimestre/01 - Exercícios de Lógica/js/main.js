function exercicio01(){
    let a = parseInt(document.getElementById("valor1").value);
    let b = parseInt(document.getElementById("valor2").value);

    let soma = a+b;
    document.getElementById("resultado").innerHTML= soma;
}