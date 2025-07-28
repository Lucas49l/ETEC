const velocidade = parseFloat(prompt("Velocidade capitada pelo radar"));
const velocidade_maxima = 50.0;
const valor_multa = 250.0;

if(velocidade > velocidade_maxima){

    if(velocidade <= 80.0){

        if((velocidade > 50.0) && (velocidade <= 60.0)){
            multa = valor_multa + (valor_multa/100)*15;
            console.log("Velocidade = ", velocidade);
            console.log("Multa com um acrescimo de 15% = ", multa);

        }else if((velocidade >60.0) && (velocidade <=70.0)){
            multa = valor_multa + (valor_multa/100)*25;
            console.log("Velocidade = ", velocidade);
            console.log("Multa com um acrescimo de 25% = ", multa);

        }else{
            multa = valor_multa + (valor_multa/100)*35;
            console.log("Velocidade = ", velocidade);
            console.log("Multa com um acrescimo de 35% = ", multa);
        }

    }else{
        multa = valor_multa + (valor_multa/100)*50;
        console.log("Velocidade = ", velocidade);
        console.log("Multa com um acrescimo de 50% = ", multa);
    }

}else if(velocidade <= 0){
    console.log("Velocidadde Invalida");
}else{
    console.log("Dentro do limite de velocidades")
}