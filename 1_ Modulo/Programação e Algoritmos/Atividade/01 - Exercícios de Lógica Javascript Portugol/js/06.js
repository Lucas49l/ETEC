/*
Lógica resolução
1- entrar com quantidade de bug;
2- multiplicar a quantidade de bugs pelo bonus e somar com o salário;
3- apresentar o salário final. */
var salario = 4500;
var bonus = 200;
var bugs = parseInt(prompt("Quantidades de Bugs resolvidos: "));
var salariobonus = (bonus*bugs)+salario;
console.log("Salário com bonus: ", salariobonus);

