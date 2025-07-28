const notas = []
let media;
let soma=0;
let p = 1;
 
for(let i=0;i<=3;){
    notas[i] = parseFloat(prompt(`Digite a ${p}° Nota`))

    if((notas[i] >=0) & (notas[i] <=10)){
        console.log(`${p}° Nota: ${notas[i]}`)
        soma = soma+ notas[i]
        p++;
        i++;

    }else{
        alert("Nota Invalida! Insira novamente")
    }
}
media = soma/4

console.log(`Média: ${media}`)



