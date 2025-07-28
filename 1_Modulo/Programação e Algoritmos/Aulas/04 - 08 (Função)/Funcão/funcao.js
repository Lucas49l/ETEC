let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;

let res;

document.getElementById("resultado").innerHTML = onclick;

function somar(){
    return n1 + n2;
}
function subtrair(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let = n1 - n2;
    document.getElementById("resultado").innerHTML = res;
}
function multiplicar(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let res = n1 * n2;
    document.getElementById("resultado").innerHTML = res;
}
function dividir(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let res = n1 / n2;
    document.getElementById("resultado").innerHTML = res;
}

