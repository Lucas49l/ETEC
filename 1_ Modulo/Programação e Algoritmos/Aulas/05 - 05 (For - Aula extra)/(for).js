let list=[] //lista vazia
let parar= false; //condição do loop 

while(parar == false){ //enquanto falsa o loop executa
    for(let i=0 ; i <=3; i++){
        list[i]= parseInt(prompt(`Digite o ${i+1}° valor`));
    } // com o for, vai armazenar 4 valores e adicionar na lista

    console.log(`Valores digitados: ${list.join(' ')}`)//listar a lista como string

    for(let i=0 ; i <=2; i++){
        for(let c= i+1 ; c <=3; c++){
            if(list[i] >= list[c]){
                let x = list[i];
                list[i]= list[c];
                list[c]= x;
            }
        }
    }

    console.log(list.join(' '));
    
    let pergunta = prompt("Parar S/N");

    if((pergunta=='S') || (pergunta=='s')){
        parar = true;
    }else{
        parar = false;
    }
}

    console.log(parar)