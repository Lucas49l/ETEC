/*var nota1 = parseFloat(prompt("Digite a primeira nota: "));
		
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
		
var nota3 = parseFloat(prompt("Digite a Terceira nota: "));
*/

const nota = [];

for(var c = 1; c < 4; c++){
    nota[c]= parseFloat(prompt("Digite a",c,"° nota: "));
}

media = (nota[1]+nota[2]+nota[3])/3;

if(media < 5){
	console.log("Reprovado");
}
else if((media >= 5) && (media < 7 )){
	console.log("Recuperação")
}
else{
	console.log("Aprovado");
}