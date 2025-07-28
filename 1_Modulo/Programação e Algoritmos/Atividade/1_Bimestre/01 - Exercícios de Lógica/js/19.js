var saldo = 20000;

var retirada = parseInt(prompt("Quanto deseja retirar"));

if( retirada <= saldo){
    saldo= saldo-retirada;
    console.log("Retirado:",retirada);
    console.log("Saldo atual:",saldo);
}else{
    console.log("Saldo insuficiente!");
}

