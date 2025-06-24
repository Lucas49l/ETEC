let media;
let soma=0;
 
for(let i=1;i<=4;){
    let notas = parseFloat(prompt(`Digite a ${i}° Nota`))

    if((notas >=0) & (notas <=10)){
        console.log(`${i}° Nota: ${notas}`)
        soma = soma+ notas
        i++;

    }else{
        alert("Nota Invalida! Insira novamente")
    }
}
media = soma/4

console.log(`Média: ${media}`)



