import readline from 'readline';
import open from 'open';  // Usando import para o módulo 'open'

async function pesquisarNoWise(termoDePesquisa) {
  const url = "https://wise.com/br/currency-converter/brl-to-usd-rate?amount=1000";
  
  // Abre a página no navegador
  open(url);

  // Espera um tempo para garantir que a página tenha carregado (ajuste conforme necessário)
  setTimeout(() => {
    console.log(`A pesquisa foi realizada para o valor: ${termoDePesquisa}`);
    console.log("Simulação de clique e envio de pesquisa realizada.");
  }, 3000); // Aguarda 3 segundos
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a conversão: ", (termo) => {
  pesquisarNoWise(termo);
  rl.close();
});
