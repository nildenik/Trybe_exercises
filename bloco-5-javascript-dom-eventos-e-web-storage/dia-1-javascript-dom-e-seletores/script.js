// const paragraph = document.getElementById("paragraph");
// paragraph.style.color = "red";

// document.getElementById("page-title").innerText = "The lord of the rings";
// document.getElementById("secondParagraph").innerText = "Este paragrafo vou colocar uma fonte diferente e mudar a cor";
// secondParagraph.style.color = "blue";
// document.getElementById("subtitle").innerText = "Este agora é o subtitulo alterado"

// No getElementsByClassName é preciso passar a posição [0]

// let doisParagrafos = document.getElementsByClassName("classeTeste");

// for (var i = 0; i < doisParagrafos.length; i+=1){
//     doisParagrafos[i].innerText = "trocando os elementos";

// }

let mudarCor = document.getElementsByClassName("classeTeste")[0];
mudarCor.style.backgroundColor = "red";
