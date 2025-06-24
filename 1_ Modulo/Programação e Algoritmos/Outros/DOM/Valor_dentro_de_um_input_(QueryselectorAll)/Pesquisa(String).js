//Função de pesquisa
document.getElementById('pesquisa').addEventListener('input', search);

function search(){
    const divproduto = document.querySelectorAll('.produtos');
    const div = Array.from(divproduto);
    
    let buscar = document.getElementById('pesquisa').value;
    console.log(buscar)
   
    const nomeProduto = document.querySelectorAll('.nomeProduto');
    const listaProdutos = Array.from(nomeProduto).map(nome => nome.textContent.trim().toLocaleLowerCase());

    for(let i=0;i<div.length;i++){
        div[i].style.Display='none'
    }

    for(let i=0; i<listaProdutos.length; i++){
        if(listaProdutos[i].includes(buscar)){
            div[i].style.Display='visible';
        }
}}