const valor = [1,2,3,4];
var somaTotal = 0;

for (let i=1; i<=4;i++){
    valor[i] =parseFloat(prompt("Digite o "+i+"° valor"));
}

for (let i=1; i<=4;i++){
    var quadrado = math.pow(valor[i], 2);
    somaTotal = somaTotal+quadrado; 
}

console.log("A soma total dos valores ao quadrado = ",somaTotal);




