var lado1 = parseFloat(prompt("Digite o primeiro valor:"));
var lado2 = parseFloat(prompt("Digite o segundo valor:"));
var lado3 = parseFloat(prompt("Digite o terceiro valor:"));

if((lado1==lado2 ) && (lado2==lado3) && (lado1==lado3)){
	console.log (" é um triângulo equilátero");
}
else if((lado1!=lado2) && (lado2 != lado3) && (lado1!=lado3)){
	console.log("é um triângulo escaleno");
}
else{
	console.log("é um triângulo isósceles");
}