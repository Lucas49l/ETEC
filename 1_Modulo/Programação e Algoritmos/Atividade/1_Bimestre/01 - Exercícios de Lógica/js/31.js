
var fqcCardiaca = parseFloat(prompt("Digite a frequência cardiaca: "));

if(fqcCardiaca >=60){
    if(fqcCardiaca > 100){
        console.log("TAQUICARDIA");
    }else{
        console.log("NORMOCARDIA");
    }
}else{
    console.log("BRADIQUICARDIA");
}

