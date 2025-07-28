programa
{
	
	funcao inicio()
	{
		inteiro contador // indice
		//Estrutura
		escreva("Números Pares: \n")
		para(contador = 0; contador <= 100; contador ++){
			se(contador !=0){
				se(contador%2==0){
					escreva(contador,"par", "\n")
				}senao{
					escreva(contador,"Impar", "\n")
				}
			
			}
		}	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 175; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */