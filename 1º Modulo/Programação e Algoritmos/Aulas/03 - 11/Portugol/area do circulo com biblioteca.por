programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{	
		real r= 3.14
		real area, raio, quadrado

		escreva("Digite o raio do circulo: ")
		leia(raio)
		
		quadrado = mat.potencia(raio, 2.0)
		area= quadrado*r
		escreva("Área do circulo: ", area)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 228; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */