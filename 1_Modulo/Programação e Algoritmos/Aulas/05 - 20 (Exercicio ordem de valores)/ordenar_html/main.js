
function crescente(){
let a = parseInt(document.getElementById("valor1").value);
let b = parseInt(document.getElementById("valor2").value);
let c = parseInt(document.getElementById("valor3").value);

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
document.getElementById("resultado").innerHTML = `${a}, ${b}, ${c}`; 
}
