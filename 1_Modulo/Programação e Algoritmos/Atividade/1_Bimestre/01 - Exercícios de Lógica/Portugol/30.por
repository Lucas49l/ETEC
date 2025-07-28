programa
{
	
	funcao inicio()
	{
		real aulasPrevistas, aulasAluno, presencaMin
		escreva("Digite o total de aulas: ")
		leia(aulasPrevistas)
		escreva("Digite o numero de aulas em que o aluno esteve presente: ")
		leia(aulasAluno)
		presencaMin = (aulasPrevistas/100)*75
		se(aulasAluno >= presencaMin){
 			escreva("ALUNO APROVADO")
		}senao{
    			escreva("ALUNO RETIDO POR EXCERDER NÚMERO DE FALTAS")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 414; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */