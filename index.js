// const getPokemonList = require("./src/getPokemonList");
const fs = require('fs');

// getPokemonList().then(list => {
//     const toWrite = JSON.stringify(list, null, 2);

//     fs.writeFile('./assets/pokedex.json', toWrite, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// })

// const pokedex = require('./assets/pokedex.json');

// for (let i = 0; i < pokedex.length; i += 1) {
//     const current = pokedex[i];
//     const loca = current.localisation

//     for (let j = 0; j < loca.length; j += 1) {
//         // Remove spaces
//         loca[j] = loca[j].trim()

//         // Check last one
//         if (j === loca.length - 1) {
//             const indexEvo = loca[j].search('Évolution');
//             if (indexEvo !== -1) {
//                 current.evo = loca[j].substr(indexEvo)
//                 loca[j] = loca[j].substr(0, indexEvo);
//             }
//         }
//     }
// }

// const toWrite = JSON.stringify(pokedex, null, 2);

// fs.writeFile('./assets/pokedex2.json', toWrite, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// const pokedex = require('./assets/pokedex2.json');

// for (let i = 0; i < pokedex.length; i += 1) {
//     const current = pokedex[i];
//     const loca = current.localisation

//     for (let j = 0; j < loca.length; j += 1) {

//         // Check last one
//         if (loca.length === 1) {
//             if (loca[j] === "") {
//                 loca.pop();
//             }
//         }
//     }
// }

// console.log(pokedex[1]);
// const toWrite = JSON.stringify(pokedex, null, 2);

// fs.writeFile('./assets/pokedex.json', toWrite, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });