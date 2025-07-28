function ordenar(x,y,z){
let list=[x,y,z];

for(let i=0; i<=1; i++){
    for(let c= i+1; c<=2; c++){
        if(list[i]>list[c]){
            let armazenar=list[i];
            list[i]=list[c];
            list[c]=armazenar;
        }
    }
}
return console.log(`${list.join(" ")}`)
}

let valor1 = parseInt(prompt("Digite o 1° Valor"));
let valor2 = parseInt(prompt("Digite o 2° Valor"));
let valor3 = parseInt(prompt("Digite o 3° Valor"));

console.log(`Valores digitados: ${valor1} ${valor2} ${valor3}`);
let crescente = ordenar(valor1,valor2,valor3);

console.log(`Valores digitados: ${valor1} ${valor3} ${valor2}`);
crescente = ordenar(valor1,valor3,valor2);

console.log(`Valores digitados: ${valor2} ${valor1} ${valor3}`);
crescente = ordenar(valor2,valor1,valor3);

console.log(`Valores digitados: ${valor2} ${valor3} ${valor1}`);
crescente = ordenar(valor2,valor3,valor1);

console.log(`Valores digitados: ${valor3} ${valor1} ${valor2}`);
crescente = ordenar(valor3,valor1,valor2);

console.log(`Valores digitados: ${valor3} ${valor2} ${valor1}`);
crescente = ordenar(valor3,valor2,valor1);




