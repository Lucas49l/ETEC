let valor1 = parseInt(prompt("Digite o 1° Valor"));
let valor2 = parseInt(prompt("Digite o 2° Valor"));
let valor3 = parseInt(prompt("Digite o 3° Valor"));

console.log(`Valores digitados: ${valor1} ${valor2} ${valor3}`)

if((valor1<= valor2) && (valor1 <= valor3)){    
    if(valor2 <= valor3){
        console.log(valor1,valor2,valor3)
    }else{
        console.log(valor1,valor3,valor2)
    }
    
}else if((valor2 <= valor1) && (valor2 <= valor3)){
    if(valor1<=valor3){
        console.log(valor2,valor1,valor3)
    }else{
        console.log(valor2,valor3,valor1)
    }

}else{
    if(valor1<=valor2){
        console.log(valor3,valor1,valor2)
    }else{
        console.log(valor3,valor2,valor1)
    }
}