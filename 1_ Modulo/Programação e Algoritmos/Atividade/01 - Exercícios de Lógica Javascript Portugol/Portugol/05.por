programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real p, a, q, res
		escreva("Digite o seu peso: ")
		leia(p)
		escreva("Digite o sua autura: ")
		leia(a)
		q = mat.potencia(a, 2) 
		res = p/q
		escreva("Seu IMC é: ", res)
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 251; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */