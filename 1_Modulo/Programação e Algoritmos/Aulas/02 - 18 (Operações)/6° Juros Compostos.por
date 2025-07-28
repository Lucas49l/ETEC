programa
{
	
	funcao inicio()
	{
		real x, juros1, juros2, juros3
		escreva("Digite um valor: ")
		leia(x)

		juros1 = x * 1.1
		juros2 = juros1 * 1.1
		juros3 = juros2 * 1.1

		escreva("O valor do primeiro mês é: ",juros1,"\n")
		escreva("O valor do segundo mês é: ",juros2,"\n")
		escreva("O valor do terceiro mês é: ",juros3,"\n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 316; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */