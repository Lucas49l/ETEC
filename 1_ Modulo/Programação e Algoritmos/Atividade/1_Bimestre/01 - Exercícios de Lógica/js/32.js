

var fqcRespiratoria = parseFloat(prompt("Digite a frequência respiratória: "));

if(fqcRespiratoria <= 20){
    if(fqcRespiratoria >= 12){
        console.log("EUPNEIA");
    }else{
        console.log("BRADIPNEIA");
    }
}else{
    console.log("TAQUIPNEIA");
}