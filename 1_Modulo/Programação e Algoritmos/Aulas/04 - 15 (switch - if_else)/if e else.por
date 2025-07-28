programa
{
	
	funcao inicio()
	{
		inteiro opcao
		escreva("Digite o mês desejado")
		escreva("\nEscolha uma opção: ")
		leia(opcao)

		se(opcao == 1){
			escreva("Janeiro")
		}senao se(opcao == 2){
			escreva("Fevereiro")
		}senao se(opcao == 3){
			escreva("Março")
		}senao se(opcao == 4){
			escreva("Abril")
		}senao{
			escreva("Opção inválida")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 342; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */