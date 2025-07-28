
        const listRem = document.querySelectorAll('.remo');

listRem.forEach(element => {
  element.style.visibility = 'visible';
});

function tornarVisivel(classe) {
  const elementos = document.querySelectorAll(`.${classe}`);

  elementos.forEach(element => {
    element.style.visibility = 'visible';
  });
}

