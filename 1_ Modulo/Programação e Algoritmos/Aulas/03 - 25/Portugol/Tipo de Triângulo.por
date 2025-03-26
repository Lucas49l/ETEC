programa
{
	
	funcao inicio()
	{
		real lado1, lado2, lado3
		
		escreva("Digite o primeiro valor: ")
		leia(lado1)
		
		escreva("Digite o segundo valor: ")
		leia(lado2)
		
		escreva("Digite o terceiro: ")
		leia(lado3)
		se ((lado1==lado2 ) e (lado2==lado3)){
			escreva (" é um triângulo equilátero")
		}
		senao se ((lado1 != lado2) e (lado2 != lado3) e (lado1 != lado3)){
			escreva("é um triângulo escaleno")
		}
		senao{
			escreva("é um triângulo isósceles")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 239; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */