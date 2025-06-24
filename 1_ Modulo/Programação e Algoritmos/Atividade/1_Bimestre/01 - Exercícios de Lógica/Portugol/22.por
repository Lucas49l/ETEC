programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real valor[5], somaTotal= 0.0, quadrado
		inteiro c
	 	para (c = 1; c <=4; c++){
	 		escreva("Digite o ",c,"° valor: ")
	 		leia(valor[c])
	 }	
	 	para (c = 1; c <=4; c++){
	 		quadrado= mat.potencia(valor[c],2.0)
	 		somaTotal= somaTotal+quadrado
	 	}
	 	escreva("A soma total dos valores ao quadrado = ",somaTotal)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 394; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */