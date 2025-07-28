programa
{
	
	funcao inicio()
	{
		const real valorPeca= 150.0
		real pecasVendidas,totalVenda, comissao
		escreva("Quantidadesde peças vendidas: ")
		leia(pecasVendidas)
		totalVenda= valorPeca*pecasVendidas
		comissao= totalVenda+(totalVenda/100)*5
		escreva("Pagamento de comissão dos vendedores de peças = ",comissao)
	}
}                               
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 357; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */