/*3.	Peça números ao usuário até que ele digite 0. Some todos os números digitados*/

let numero = 1
let soma=0;
while(numero != 0){
    numero = parseInt(prompt('Digite um numero:'));
    console.log(numero);
    soma = soma+numero;
}
console.log(`soma dos numeros ${soma}`);

