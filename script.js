
const contVerde = document.getElementById('header-container')
.style.backgroundColor = 'green';

const pintarRosa = document.getElementsByClassName('emergency-tasks')[0]
.style.backgroundColor = 'rgb(255, 159, 132)';

const hUrg = document.querySelectorAll('.emergency-tasks h3');
for(let i = 0; i < hUrg.length; i ++){
hUrg[i].style.backgroundColor = 'rgb(165, 0, 243)';
}
const pintarAmarelo = document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

const hNaoUrgen = document.querySelectorAll('.no-emergency-tasks h3');
for(let index = 0; index < hNaoUrgen.length; index++){
    hNaoUrgen[index].style.backgroundColor = 'black'
}

