function somar(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let res =valor1+valor2;
    document.getElementById("resultado").innerHTML= res;
}

function subtrair(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let res = valor1-valor2;
    document.getElementById("resultado").innerHTML= res;
}

function dividir(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let res = valor1/valor2;
    document.getElementById("resultado").innerHTML= res;
}

function multiplicar(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let res = valor1*valor2;
    document.getElementById("resultado").innerHTML= res;
}

