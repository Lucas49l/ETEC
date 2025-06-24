programa
{
	
	funcao inicio()
	{
		real peso, pesoMax
		escreva("Digite o peso do lutador: ")
		leia(peso)
		escreva("Digite o peso máximo d categoria do lutador: ")
		leia(pesoMax)
		se (peso <= pesoMax){
    			escreva("O lutador está com peso dentro do permitido para sua categoria")
		}senao{
    			escreva("O lutador está com peso acima do permitido para sua categoria")
		}	                                                     
	}                                                                                      
}    
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 507; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */