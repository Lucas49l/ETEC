
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


/*Pesquisa*/

document.getElementById('pesquisa').addEventListener('input', search);

function search(){
    const divproduto = document.querySelectorAll('.produtos');
    const div = Array.from(divproduto);
    
    let buscar = document.getElementById('pesquisa').value;
    console.log(buscar)
   
    const nomeProduto = document.querySelectorAll('.nomeProduto');
    const listaProdutos = Array.from(nomeProduto).map(nome => nome.textContent.trim().toLocaleLowerCase());

    for(let i=0;i<div.length;i++){
        div[i].style.visibility='hidden'
    }

    for(let i=0; i<listaProdutos.length; i++){
        if(listaProdutos[i].includes(buscar)){
            div[i].style.visibility='visible';
        }
}}