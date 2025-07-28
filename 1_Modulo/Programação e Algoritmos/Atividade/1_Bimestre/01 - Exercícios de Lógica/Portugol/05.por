programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real peso, altura, quadrado, IMC
		escreva("Digite o seu peso: ")
		leia(peso) 
		escreva("Digite a sua altura: ")
		leia(altura)
		quadrado = mat.potencia(altura, 2.0) 
		IMC = peso/quadrado
		escreva("Seu IMC é: ", IMC)
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 301; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */