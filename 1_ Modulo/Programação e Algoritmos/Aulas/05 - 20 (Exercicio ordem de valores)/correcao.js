let a;
let b;
let c;

for(let i=1;i<=3;i++){
    let valor = parseInt(prompt(`Digite o ${i}° valor`))
    if(i==1){
        a=valor
    }else if( i==2){
        b=valor
    }else{
        c=valor
    }
}
let menor= 0;
let meio= 0;
let maior =0;
if((a<=b)&&(a<=c)){
    menor =a
    if(b <= c){
        meio =b
        maior =c
    }
}else if((b<= a) && (b<= c)){
    menor = b
    if (a<=c){
        meio = a
        maior = c
    }else{
        meio = c
        maior = a
    }
}else{
    menor = c 
    if(a <= b){
        meio =a
        maior=b
    }else{
        meio=b
        maior=a
    }
}
console.log(`Ordem crescente: ${menor} ${meio} ${maior}`)
