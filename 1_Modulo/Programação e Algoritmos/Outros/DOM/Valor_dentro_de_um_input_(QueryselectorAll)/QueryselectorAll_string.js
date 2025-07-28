
/*pegar um valor ao ser digitdo*/
document.getElementById("meuBotao").addEventListener("click", function() {
    let valor = document.getElementById("meuInput").value;
    console.log("Valor digitado: " + valor);
});

/*pegar o valor de um input*/
//.value pega o valor dentro do input
function filtrarON(){
    let buscar = document.getElementById('pesquisa').value;
    console.log(buscar)
}

/*pegar textos de classes e ids*/

//1. Usando forEach() diretamente
//Em vez de converter para um array, podemos percorrer o NodeList diretamente:
const nomeVariavel = document.querySelectorAll('.nomeClasse');
const lista = [];
nomeVariavel.forEach(nome => lista.push(nome.textContent.trim()));//adiciona o texto dentro do nomevariavel na lista
console.log(lista);

//2. Usando spread operator (...)
//Isso transforma NodeList diretamente em um array:
const nomeProduto1 = [...document.querySelectorAll('.nomeProduto')];
const produto1 = nomeProduto1.map(nome => nome.textContent.trim());
console.log(produto1);


//3. Usando reduce()
//Aqui, o reduce() acumula os textos em um array:
const nomeProduto2 = document.querySelectorAll('.nomeProduto');
const produto2 = Array.from(nomeProduto2).reduce((acc, nome) => {
    acc.push(nome.textContent.trim());
    return acc;
}, []);
console.log(produto2);


//4. Usando um loop for
//Se precisar de um método mais tradicional:
const nomeProduto3 = document.querySelectorAll('.nomeProduto');
const produto3 = [];
for (let i = 0; i < nomeProduto3.length; i++) {
    produto3.push(nomeProduto3[i].textContent.trim());
}
console.log(produto3);
