// // const acordar = () => {return 'Acordando!!';}
// // const cafe = () => {return 'Bora tomar café!!';}
// // const domir = () => { return 'Partiu dormir!!';}

// // const doingThings = (func) => func(acordar); 

// // console.log(doingThings(acordar));
// // --------------------------------------------------
// /* Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.*/


// // const objId = (nome) => {
// //     const employees = nome;
// //     const lowerCaseName = employees.toLowerCase();
// //     const arrayName = lowerCaseName.split(' ');
// //     const juntaArray = arrayName.join('_');
// //     const emailCompleto = `${juntaArray}@trybe.com`;

// //     const dados = {
// //         nomeCompleto: nome,
// //         email: emailCompleto,
// //     }
// //     return dados;
// // }

// // const objId2 = (nome) => {
// //     const employees = nome;
// //     const lowerCaseName = employees.toLowerCase();
// //     const arrayName = lowerCaseName.split(' ');
// //     const juntaArray = arrayName.join('_');
// //     const emailCompleto = `${juntaArray}@trybe.com`;

// //     const dados = {
// //         nomeCompleto: nome,
// //         email: emailCompleto,
// //         idade: 18,
// //     }
// //     return dados;
// // }

// // const newEmployees = (callback) => {
// //     const employees = {
// //       id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
// //       id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
// //       id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
// //     }
// //     return employees;
// //   };
// //   console.log(newEmployees(objId2));
// // --------------------------------------------------------------
// // const newEmployees = (employeGenerator) => {
// //     const employees = {
// //       id1: employeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
// //       id2: employeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
// //       id3: employeGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
// //     }
// //     return employees;
// //   };

// //   const employeGenerator = (name) => {
// //     const email = name.toLowerCase().split(' ').join('_');
// //     return {name, email: `${email}@betrybe.com`}
// //   }
// //   console.log(newEmployees(employeGenerator));
// // // ------------------------------------------------


// // /*2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// // */
// // const checaNumeroApostado = (numerosAleatorios, numApostado) => numerosAleatorios === numApostado;

// // const aleatorios = (numApostado, callback) => {
// //     let numerosAleatorios = Math.floor((Math.random() * 5) +1);
// //     return callback(numerosAleatorios, numApostado) ? 'Lucky day, you won!' : 'Try Again!';
// // }
// // console.log(aleatorios(4, checaNumeroApostado));
// // // ------------------------------------------------------------

// // let info = {
// //     personagem: 'Margarida',
// //     origem: 'Pato Donald',
// //     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// //   };
// //   console.log(`Olá ${info.personagem} seja bem vinda` );
//   // -------------------------------------------------------------
//    const imprimeDados = (nome, idade) => ({nome:nome, idade: idade});
//   console.log(imprimeDados('Nilde', 30));

//   // ---------------------------------------------------------------

//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const multipliesFor2 = (element) => {
//     console.log(`${element} * 2: ${element * 2}`);
//   };
  
//   numbers.forEach(multipliesFor2);
//   // -------------------------------------------------------------
//   const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach(showEmailList);
//   // ----------------------------------------------------------------
//   const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); 
// // ------------------------------------------------------------------
// // neste exercicio o sort ordena pela idade.
// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort(((a, b) => a.name - b.name));

// console.log(people);
// ----------------------------------------------

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   // Adicione seu código aqui:
// }

// console.log(findNameWithFiveLetters());
// -----------------------------------------------------

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];
// /*4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort */

// function oldBooksOrdered() {
//      return books.filter( (elemento) => {
//       return 2022 - elemento.releaseYear > 60;
//     }).sort((a, b) => a.releaseYear - b.releaseYear);
   
// }
// console.log(oldBooksOrdered());

// ---------------------------------------------------------
/*Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.*/

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors() {
//   return books.sort(() => {${author.name}});
  
// }
// console.log(fantasyOrScienceFictionAuthors());

/*Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.*/



//  function objLivros () { 

//    return books.map((callback) => 
//    ({ Author: callback.author.name,
//      age: callback.releaseYear - callback.author.birthYear
//    })).sort((a, b) => a.age - b.age);
// }
// console.log(objLivros(books));
// -------------------------------------------

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// let soma = 0;

// function usandoReduce(){
// for(let i = 0; i < numbers.length; i +=1){
// soma += numbers[i];
// }
// return numbers.reduce((acumulador, callback) => acumulador + callback)
// }
// console.log(usandoReduce(acumulador));

// ------------------------------------------------

var numeros = [0, 1, 2, 3, 4, 5, 6];
var total = numeros.reduce((acumulador, numero, indice, original) => {
console.info(`${acumulador} total até o momento`);
console.log(`${numero} valor atual`);
console.log(`${indice} indice atual`);
console.log(`${original} array original`);
return acumulador += numero;
}, 0)
console.warn('total');
console.log(total)
// --------------------------------------------------
/* exercicio 5 do  8.4 (modelo) */

// function containsA(array) {
//   return array.reduce((cont, element) => {
//   const valor = element.split('').filter((el) => el === 'a' || el === 'A')
//   return cont += valor.length
//   }, 0)
//   } 
// ---------------------------------------------------
// --questão 1
// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten(){
//    return arrays.reduce((acc, element) => acc.concat(element),[]);
// }
// console.log(flatten(arrays))
// -----------------------------------------------------









