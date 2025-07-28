
const valorPeca = 150;

var pecasVendidas = parseFloat(prompt("Quantidade de peças vendidas"));

var totalVenda = valorPeca*pecasVendidas;
var comissao = totalVenda+(totalVenda/100)*5;

console.log("Pagamento de comissão dos vendedores de peças = ",comissao);

