programa
{
	
	funcao inicio()
	{
		logico valido = falso
		inteiro idade
		
		enquanto(valido == falso){
			escreva("Digite uma idade entrte 0 e 120: ")
			leia(idade)
			se((idade > 0)e(idade <=120)){
		     	valido=verdadeiro        
		   	}senao{
		   		escreva("Idade invalida!\n")
    			}
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