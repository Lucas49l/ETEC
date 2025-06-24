let soma = 0.0;
let list=[0,0,0,0,0,0];

const listRem = document.querySelectorAll('.remo');
const remover = Array.from(listRem);

const listAdd = document.querySelectorAll('.add');
const adicione = Array.from(listAdd)

function adicionar(botao, valor){
    for(let i =0; i< adicione.length;i++){
        if(adicione[i] == botao){
            soma = soma+valor;
            document.getElementById("total").innerHTML = soma;
            remover[i].style.visibility = 'visible';
            list[i] = list[i] + 1;
            console.log(list[i])
        }
    }
}

function tirar(botao, valor){
    for(let i =0; i< remover.length;i++){
        if(remover[i] == botao){
            soma = soma-valor;
            document.getElementById("total").innerHTML = soma;
            if(list[i]>1){
                list[i] = list[i] - 1;
                console.log(list[i])
            }else{
                remover[i].style.visibility = 'hidden';
                list[i] = list[i] - 1;
            }
        }
    }
}



 


