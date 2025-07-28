
let a = parseInt(prompt("Digite 1° valor ")) 
let b = parseInt(prompt("Digite 2° valor "))
let c = parseInt(prompt("Digite 3° valor "))

console.log(`Valores digitados: ${a} ${b} ${c}`)

for(let i=1; i<=2;i++){
    if(a >= b){
        let x = a;
        a = b;
        b = x;
    }
    if(b >= c){
        let x = b;
        b = c;
        c = x;
    }
}

console.log(`Valores Ordenados: ${a} ${b} ${c}`)

