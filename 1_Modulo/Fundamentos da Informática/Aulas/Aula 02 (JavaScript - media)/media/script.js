var nome = prompt("Digite seu nome:");
var primeiraNota = parseFloat(prompt("Primeira nota:"));
var segundaNota = parseFloat(prompt("Segunda nota:"));
var terceiraNota = parseFloat(prompt("Terceira nota:"));

var media = (primeiraNota+segundaNota+terceiraNota)/3;

alert(nome+ " Sua média é : " +media);