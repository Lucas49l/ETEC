const list = []
for(let i=1; i <=3;i++){
    list[i] = parseInt(prompt(`Digite o ${i}° Valor`));
}
console.log(`Números Digitados: ${list.join(" ")}`)
for(let i=1; i <=2;i++){
    for(let j= i+1; j <=3;j++){
        if(list[i]>=list[j]){
            let x = list[i];
            list[i] = list[j];
            list[j] = x;
        }
    }
}
console.log(`Números ordenados: ${list.join(" ")}`)
