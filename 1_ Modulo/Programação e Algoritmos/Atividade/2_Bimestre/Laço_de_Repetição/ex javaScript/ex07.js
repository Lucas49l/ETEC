/*7.	Peça uma idade entre 0 e 120. Repita enquanto a entrada for inválida.*/
let valido = false;
while(!valido){
    let idade = parseInt(prompt("Digite uma idade entrte 0 e 120"));
    if((idade > 0)&(idade <=120)){
        valido=true;        
    }else{
        alert("Idade invalida!");
    }
}
