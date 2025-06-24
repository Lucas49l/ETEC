programa
{
	
	funcao inicio()
	{
		real velocidade, velocidademax, m
		escreva("digite a velocidade capitada pelo radar")
		leia(velocidade)
		velocidademax=50.0
		se((velocidade>velocidademax) e (velocidade<=60)){
		m=(250*0.15)+250
		escreva("O valor da multa é de:", m)
		}
		 senao se((velocidade>60) e (velocidade<=70)){
		m=(250*0.25)+250
		escreva("O valor da multa é de:", m)
		}
		
		senao se((velocidade>70) e (velocidade<=80)){
		m=(250*0.35)+250
		escreva("O valor da multa é de:", m)
		}
		 senao se(velocidade>80){
		m=(250*0.50)+250
		escreva("O valor da multa é de:", m)
		}
		senao se (velocidade<=0){
			escreva("Velocidade inválida")
		}
		senao{
			escreva("A velocidade está dentro do limite permitido")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 656; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */