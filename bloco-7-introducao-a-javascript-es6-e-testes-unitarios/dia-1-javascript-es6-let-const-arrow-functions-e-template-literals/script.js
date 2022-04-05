// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

// //   testingScope(true);
//   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';

  const testingScope = (escopo) => (escopo === true) ? `Não devo ser utilizada fora do meu escopo` : `o que estou fazendo aqui ? :O`;

  console.log(testingScope(false));

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  () => (oddsAndEvens.length < 0)? `${oddsAndEvens}`: `erro!`;

  console.log(oddsAndEvens.sort()); // será necessário alterar essa linha 😉

  