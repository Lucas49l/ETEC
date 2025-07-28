function tocaSom(idElemento) { 
    document.querySelector(idElemento).play(); 
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 

for (let contador = 0; contador < listaDeTeclas.length; contador++) {  
    const tecla = listaDeTeclas[contador]; 
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio); 
    }
}

document.body.addEventListener('keyup', function(event) {
    playSound(event.code.toLocaleLowerCase());
})

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;
    
    if(song != ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

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

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
 
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);
        wait+= 200;
    }
} 