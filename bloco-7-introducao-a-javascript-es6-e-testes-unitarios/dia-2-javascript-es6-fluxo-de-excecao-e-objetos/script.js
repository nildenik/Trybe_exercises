// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   customer.lastName= 'Faria';
//   console.log(customer);

//   customer['Outro'] = 'Silva';
// console.log(customer);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// console.log(Object.keys(coolestTvShow));

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayhabilidades = Object.keys(student);
//   for(const index in arrayhabilidades){
//     console.log(`${arrayhabilidades[index]},Nivel: ${student[arrayhabilidades[index]]}`);
//   }
// }
// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };


// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
// }

// Object.values(coolestTvShow);
// -------------------------------------------------------
// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };
// Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));
//-----------------------------------------------------------


// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };
// // for(index in coolestTvShow) {
// //   console.log('--------');
// //   console.log('nome:', coolestTvShow[index][0]);
// //   console.log('genero:', coolestTvShow[index][1]);
// // };
// // //este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto
// console.log(Object.entries(coolestTvShow));
// ----------------------------------------------------
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
//   const customerInfo = (order) => {
//     const orderInf = Object.values(order)
//     console.log('Olá,', `${order.order.delivery.deliveryPerson}`, 'entrega para:',`${order.name}`,`${order.phoneNumber}`,`${order.address.street}`,`${order.address.number}`);
  
//   }
  
//   customerInfo(order);
  
  const orderModifier = (order) => {

    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.payment.total = '$50,00';
    
    const orderInf = Object.values(order)
        console.log('Olá,', `${order.order.delivery.deliveryPerson}`, ' o total do seu pedido', `${order.order.drinks.coke.type}`,'é',`${order.payment.total}`);
        
    
  
  }
  
  orderModifier(order);

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

