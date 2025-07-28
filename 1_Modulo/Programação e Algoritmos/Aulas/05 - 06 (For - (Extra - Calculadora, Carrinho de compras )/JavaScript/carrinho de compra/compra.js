
 let soma = 0.0;

function adicionar1(valor){
    soma = soma+valor;
    document.getElementById("total").innerHTML = soma;

    let rem = document.querySelector('.remo1');
    rem.style.visibility='visible';

    qitem[1] = qitem[1]+1;
}

function adicionar2(valor){
    soma = soma+valor;
    document.getElementById("total").innerHTML = soma;

    let rem = document.querySelector('.remo2');
    rem.style.visibility='visible';

    qitem[2] = qitem[2]+1;
    
}

function adicionar3(valor){
    soma = soma+valor;
    document.getElementById("total").innerHTML = soma;

    let rem = document.querySelector('.remo3');
    rem.style.visibility='visible';
    
    qitem[3] = qitem[3]+1;
}

function remover1(valor){
    soma = soma-valor;
    document.getElementById('total').innerHTML = soma;

    qitem[1] = qitem[1]-1;
    if(qitem[1] == 0){
    let rem = document.querySelector('.remo1');
    rem.style.visibility='hidden'}
}

function remover2(valor){
    soma = soma-valor;
    document.getElementById('total').innerHTML = soma;

    qitem[2] = qitem[2]-1;
    if(qitem[2] == 0){
    let rem = document.querySelector('.remo2');
    rem.style.visibility='hidden'}
}

function remover3(valor){
    soma = soma-valor;
    document.getElementById('total').innerHTML = soma;

    qitem[3] = qitem[3]-1;
    if(qitem[3] == 0){
    let rem = document.querySelector('.remo3');
    rem.style.visibility='hidden'}
}









 


