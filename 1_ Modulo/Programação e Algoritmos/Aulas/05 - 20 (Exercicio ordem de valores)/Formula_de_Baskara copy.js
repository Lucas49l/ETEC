const a = parseFloat(prompt("Insira o valor de 'a'"));
const b = parseFloat(prompt("Insira o valor de 'b'")); 
const c = parseFloat(prompt("Insira o valor de 'c'"));

const bquadrado = Math.pow(b, 2);/* Math.pow(valor, expoente) √*/
const delta = bquadrado + (-4*a*c);
console.log(delta)

let raiz= Math.sqrt(delta);
let raizSoma = (-b+raiz)/(2*a);
let raizSubtracao = (-b-(raiz))/(2*a);

raizPerfeita = raizReal(raiz);

if(raizPerfeita){
    if(delta > 0){
        console.log(`As raizes da equação são:\n x1 = ${raizSoma} \n x2 = ${raizSubtracao}`)
    }else if(delta == 0){
        console.log(`A raiz da equação é:\n x = ${raizSoma}`)
    }else{
        let calculoSemraiz = (-b)/(2*a);
        let calculoComraiz = (raiz)/(2*a);
        console.log(`As raizes da equação são:\n x1 = ${calculoSemraiz}+${calculoComraiz}i \n x2 = ${calculoSemraiz}+${calculoComraiz}i`)
    }
}else{ 
    let soma = (-b)/(2*a);
    let deltaDiv = (delta)/(2*a)
    if(delta > 0){
        console.log(`As raizes da equação são:\n x1 = ${soma} + √${deltaDiv}  \n x2 = ${soma} - √${deltaDiv}`)
    }else if(delta == 0){
        console.log(`A raiz da equação é:\n x = ${soma} + √${deltaDiv}`)
    }else{
        console.log(`As raizes da equação são:\n x1 = ${soma} + √${deltaDiv}i \n x2 = ${soma} + √${deltaDiv}i`)
    }


}

function raizReal(x){
    return Number.isInteger(x);
}
