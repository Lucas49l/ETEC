programa
{
	
	funcao inicio()
	{
		real fqcCardiaca
		escreva("Digite a frequência cardiaca: ")
		leia(fqcCardiaca)
		se(fqcCardiaca >= 60){
    			se(fqcCardiaca > 100){
        			escreva("TAQUICARDIA")
    			}senao{
        			escreva("NORMOCARDIA")
    			}
		}senao{
    			escreva("BRADIQUICARDIA")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 314; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */