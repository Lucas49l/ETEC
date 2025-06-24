programa
{
	inclua biblioteca Util --> u //biblioteca para vetores e matrizes
	funcao inicio()
	{
		inteiro contador // indice
		inteiro lista[5]
		
		//Estrutura
		para(contador = 0; contador < u.numero_elementos(lista); contador ++){
			escreva("digite um valor: ")
			leia(lista[contador])
			}
			
		para(contador = 0; contador < u.numero_elementos(lista); contador ++){
			escreva(lista[contador]," ")		
		}
			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 304; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */