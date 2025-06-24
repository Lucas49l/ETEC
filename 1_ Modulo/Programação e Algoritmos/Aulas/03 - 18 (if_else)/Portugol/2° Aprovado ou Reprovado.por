programa
{
	
	funcao inicio()
	{
		real nota1, nota2, nota3, media
		escreva("Digite a primeira nota: ")
		leia(nota1)
		escreva("Digite a segunda nota: ")
		leia(nota2)
		escreva("Digite a Terceira nota: ")
		leia(nota3)

		media = (nota1+nota2+nota3)/3

		se(media < 5){
			escreva("Reprovado")
		}senao se((media >= 5) e (media < 7 )){
			escreva("Recuperação")
		}senao{
			escreva("Aprovado")
		}	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 407; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */