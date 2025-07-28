const velocidade=parseFloat(prompt("Digite a velocidade capitada pelo radar"));
velocidade_maxima=50.0

verdadeiro=true

switch (verdadeiro){
    case (velocidade>50 && velocidade<=60):
    m=(250*0.15)+250;
    alert("O valor da multa é de :" + m);
    break;

    case (velocidade>60 && velocidade<=70):
    m=(250*0.25)+250;
    alert("O valor da multa é de :"+ m);
    break;

    case (velocidade>70 && velocidade<=80):
    m=(250*0.35)+250;
    alert("O valor da multa é de :"+ m);
    break;

    case (velocidade>80):
    m=(250*0.50)+250;
    alert("O valor da multa é de :"+ m);
    break;

    case (velocidade<=0):
    alert("A velocidade é inválida");
    break;

    default:
    alert("A velocidade está no limite permitido")
}