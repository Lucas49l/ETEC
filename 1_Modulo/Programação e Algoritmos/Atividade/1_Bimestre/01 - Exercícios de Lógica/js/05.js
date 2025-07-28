
var peso = parseFloat(prompt("Digite o seu peso: "));

var altura = parseFloat(prompt("Digite a sua altura: "));

var quadrado = Math.pow(altura, 2);
 
IMC = peso/quadrado;

console.log("Seu IMC é: ", IMC);