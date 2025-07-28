/*
1- declarar variaveis;
2- Multiplicar a quantidade de automóveis e somar ao salario 
vendidos e somar com o salário;
3- Apresentar o salário final. */

const salario = 2000;
const bonus = 100;
var automoveisVendidos = parseInt(prompt("Total de automóveis vendidos a vista"));
var salariobonus = salario+(bonus*automoveisVendidos);
console.log("Salário final do funcionario", salariobonus)