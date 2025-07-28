
let a = parseInt(prompt("Digite 1° valor ")) 
let b = parseInt(prompt("Digite 2° valor "))
let c = parseInt(prompt("Digite 3° valor "))

console.log(`Valores digitados: ${a} ${b} ${c}`)
let orden = crescente(a,b,c);

function crescente(n1,n2,n3){
    for(let i=1; i<=2;i++){
        if(n1 >= n2){
            let x = n1;
            n1 = n2;
            n2 = x;
        }
        if(n2 >= n3){
            let x = n2;
            n2 = n3;
            n3 = x;
        }
    }
   return console.log(`Valores Ordenados: ${n1} ${n2} ${n3}`)
}