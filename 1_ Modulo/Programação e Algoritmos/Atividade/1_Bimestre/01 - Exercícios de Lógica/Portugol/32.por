programa
{
	
	funcao inicio()
	{
		real fqcRespiratoria
		escreva("Digite a frequência respiratória: ")
		leia(fqcRespiratoria)
		se(fqcRespiratoria >= 12){
    			se(fqcRespiratoria > 20){
        			escreva("TAQUIPNEIA")
    			}senao{
        			escreva("EUPNEIA")
    			}
		}senao{
    			escreva("BRADIPNEIA")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 10; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */