totalPar = 0
totalImpar = 0
for(let i = 0; i<=100; i++){
    if(i!=0){   
        if(i%2==0){
            console.log(`${i} par`)
            totalPar = totalPar+i;

        }else{
            console.log(`${i} Impar`)
            totalImpar = totalImpar+i;
        }
    }    
}

console.log(`Total da soma dos numeros impares = ${totalImpar}`)
console.log(`Total da soma dos numeros pares = ${totalPar}`)