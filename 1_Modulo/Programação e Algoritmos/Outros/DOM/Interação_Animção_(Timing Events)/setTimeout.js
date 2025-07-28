function playSound(sound){
    let audioElemento = document.querySelector(`.s_${sound}`);
    let keyElement = document.querySelector(`.${sound}`);

    if(audioElemento){
        audioElemento.currentTime=0;
        audioElemento.play();
    }

    if(keyElement){
        keyElement.classList.add('ativa');
        setTimeout(()=>{
            keyElement.classList.remove('ativa');
        },300);
    }
}
