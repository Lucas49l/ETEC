programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real volume, a, cubo

		escreva("Digite a aresta do cubo: ")
		leia(a)

		volume = mat.potencia(a, 3.0)

		escreva("o volume do cubo é: ", volume)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 191; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */