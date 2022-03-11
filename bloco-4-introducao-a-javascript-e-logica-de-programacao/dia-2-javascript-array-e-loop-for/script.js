// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// var soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   soma += parseInt(numbers[i]);
// }
// var resultado = soma / 10;

// if (resultado > 20) {
//   console.log("A valor da média foi maior que 20");
// } else {
//   console.log("O valor foi menor que 20");
//}

// var array = ["1", "2", "3"]; // exemplo de um array básico!

// var soma = 0;

// for (var x=0; x < array.length; x++) {

//  soma += parseInt(array[x]);t
// }
//<h2>A Média das notas é: ${somar()/notas.length}

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// //console.log(numbers[numbers.length - 1]);

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//}

// ****************** NÃO RESOLVIDO ****************
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for(let i = 0; i < numbers.length; i--){
//   console.log(numbers[i]);
// }

let numeroMega = [22, 14, 34, 16, 10, 11];
let meusNumeros = [13, 12, 23, 24, 10, 11];
for (let index = 0; index < numeroMega.length; index += 1) {
  //console.log("Mega: ", numeroMega[index]);
  for (let i = 0; i < meusNumeros.length; i += 1) {
    if(numeroMega[index]=== meusNumeros[i]){
    console.log("Parabéns você acertou! ", meusNumeros[i]);
  }
  }
}
