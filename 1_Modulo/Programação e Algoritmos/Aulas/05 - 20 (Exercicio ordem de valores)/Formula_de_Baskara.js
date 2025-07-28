const a = parseFloat(prompt("Insira o valor de 'a'"));
const b = parseFloat(prompt("Insira o valor de 'b'")); 
const c = parseFloat(prompt("Insira o valor de 'c'"));

const bquadrado = Math.pow(b, 2);/* Math.pow(valor, expoente) √*/
const delta = bquadrado + (-4*a*c);
console.log(delta)

let raizSoma = (-b+Math.sqrt(delta))/(2*a);
let raizSubtracao = (-b-(Math.sqrt(delta)))/(2*a);

if(delta > 0){
        console.log(`As raizes da equação são:\n x1 = ${raizSoma} \n x2 = ${raizSubtracao}`)
}else if(delta == 0){
        console.log(`A raiz da equação é:\n x = ${raizSoma}`)
}else{
        let calculoSemraiz = (-b)/(2*a);
        let calculoComraiz = Math.sqrt(-delta)/(2*a);
        console.log(`As raizes da equação são:\n x1 = ${calculoSemraiz} + ${calculoComraiz}i \n x2 = ${calculoSemraiz} - ${calculoComraiz}i`)
}