
/*Sobre exibir on/off*/
let oculto = true;
function sobre(){
    let box = document.querySelector('#sobre');
    if(oculto){
        box.style.visibility='visible';
        oculto = false;
    }else{
        box.style.visibility='hidden';
        oculto = true;
    }
    console.log(oculto)
}

/*Filtro exibir On/Off*/
let filtroDesativado = false
function filtrarON(){
    let fundo = document.querySelector('.filtroLista')
    let conteudo = document.querySelector('#filtroItems')
    if(!filtroDesativado){
        fundo.style.background='#fafafa';
        conteudo.style.visibility='visible'
        fundo.style.border='solid'
        filtroDesativado = true
    }else{
        fundo.style.background='transparent';
        conteudo.style.visibility='hidden'
        fundo.style.border='none'
        filtroDesativado = false
    }
}

