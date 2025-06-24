let a;
let b;
let c;

for(let i=1; i<=3;i++){
    let valor= parseInt(prompt("Digite 1° valor ")) 
    if(i==1){
        a=valor
    }else if( i==2){
        b=valor
    }else{
        c=valor
    }
    console.log(``)
}
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

