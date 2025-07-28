
var aulasPrevistas = parseFloat(prompt("Digite o total de aulas"));

var aulasAluno = parseFloat(prompt("Digite o numero de aulas do aluno"));

var presencaMin = (aulasPrevistas/100)*75;

if(aulasAluno >= presencaMin){
    console.log("ALUNO APROVADO");
}else{
    console.log("ALUNO RETIDO POR EXCERDER NÚMERO DE FALTAS");
}


