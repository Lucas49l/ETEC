programa
{
	
	funcao inicio()
	{
		inteiro saldo= 20000, retirada
		escreva("Quanto deseja retirar")
		leia(retirada)
		se( retirada <= saldo){
    			saldo= saldo-retirada
    			escreva("Retirado:",retirada)
    			escreva("Saldo atual:",saldo)
		}senao{
    			escreva("Saldo insuficiente!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 47; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */