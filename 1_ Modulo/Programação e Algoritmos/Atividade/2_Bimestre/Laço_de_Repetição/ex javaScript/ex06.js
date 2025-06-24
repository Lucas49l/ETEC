/*6.	O programa tem um número secreto. O usuário deve tentar adivinhar até acertar.*/

const secreto = 86;
let acertou = false;
while(!acertou){
    let numero = parseInt(prompt("Descubra o numero secreto"));
    if(numero == secreto){
        acertou = true;
    }
}
alert("Acertou o numero secreto");



