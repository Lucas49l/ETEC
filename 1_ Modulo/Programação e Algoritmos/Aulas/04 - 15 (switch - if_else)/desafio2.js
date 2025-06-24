idade = parseInt(prompt("Digite a idade: "));

if( idade >= 18){
    if(idade >= 65){
        console.log("idoso")
    }else{
        console.log("Adulto jovem")
    }
}else if(idade >0){
    console.log("Crinaça")
}else{
    console.log("idade invalida")
}