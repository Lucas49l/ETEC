programa
{
	inclua biblioteca Util --> u //biblioteca para vetores e matrizes
	funcao inicio()
	{
		inteiro contador // indice
		caracter lista[] = {'A','B','C','D'}
		
		//Estrutura
		para(contador = 0; contador < u.numero_elementos(lista); contador ++){
			escreva(lista[contador]," ")

			//u.numero_elementos(lista) o limite do loop vai até o ultimo elemento da lista 
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 335; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */