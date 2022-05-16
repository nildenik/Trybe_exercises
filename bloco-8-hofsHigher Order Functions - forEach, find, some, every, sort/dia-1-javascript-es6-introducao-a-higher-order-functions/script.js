// const acordar = () => {return 'Acordando!!';}
// const cafe = () => {return 'Bora tomar café!!';}
// const domir = () => { return 'Partiu dormir!!';}

// const doingThings = (func) => func(acordar); 

// console.log(doingThings(acordar));
// --------------------------------------------------
/* Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.*/


// const objId = (nome) => {
//     const employees = nome;
//     const lowerCaseName = employees.toLowerCase();
//     const arrayName = lowerCaseName.split(' ');
//     const juntaArray = arrayName.join('_');
//     const emailCompleto = `${juntaArray}@trybe.com`;

//     const dados = {
//         nomeCompleto: nome,
//         email: emailCompleto,
//     }
//     return dados;
// }

// const objId2 = (nome) => {
//     const employees = nome;
//     const lowerCaseName = employees.toLowerCase();
//     const arrayName = lowerCaseName.split(' ');
//     const juntaArray = arrayName.join('_');
//     const emailCompleto = `${juntaArray}@trybe.com`;

//     const dados = {
//         nomeCompleto: nome,
//         email: emailCompleto,
//         idade: 18,
//     }
//     return dados;
// }

// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };
//   console.log(newEmployees(objId2));
// --------------------------------------------------------------
// const newEmployees = (employeGenerator) => {
//     const employees = {
//       id1: employeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: employeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: employeGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   const employeGenerator = (name) => {
//     const email = name.toLowerCase().split(' ').join('_');
//     return {name, email: `${email}@betrybe.com`}
//   }
//   console.log(newEmployees(employeGenerator));
// // ------------------------------------------------


// /*2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// */
// const checaNumeroApostado = (numerosAleatorios, numApostado) => numerosAleatorios === numApostado;

// const aleatorios = (numApostado, callback) => {
//     let numerosAleatorios = Math.floor((Math.random() * 5) +1);
//     return callback(numerosAleatorios, numApostado) ? 'Lucky day, you won!' : 'Try Again!';
// }
// console.log(aleatorios(4, checaNumeroApostado));
// // ------------------------------------------------------------

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log(`Olá ${info.personagem} seja bem vinda` );
  // -------------------------------------------------------------
   const imprimeDados = (nome, idade) => ({nome:nome, idade: idade});
  console.log(imprimeDados('Nilde', 30));

  // ---------------------------------------------------------------
  
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const multipliesFor2 = (element) => {
    console.log(`${element} * 2: ${element * 2}`);
  };
  
  numbers.forEach(multipliesFor2);
