// const getPokemonList = require("./src/getPokemonList");
const fs = require('fs');
const getRouteData = require('./src/getRouteData');

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

// const fetchData = async () => {
//     let fullList = [];
//     const rte1 = await getRouteData('Route 1', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-1');
//     const rte2 = await getRouteData('Route 2', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-2');
//     const rte3 = await getRouteData('Route 3', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-3');
//     const rte4 = await getRouteData('Route 4', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-4');
//     const rte5 = await getRouteData('Route 5', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-5');
//     const rte6 = await getRouteData('Route 6', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-6');
//     const rte7 = await getRouteData('Route 7', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-7');
//     const rte8 = await getRouteData('Route 8', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-8');
//     const rte9 = await getRouteData('Route 9', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-9');
//     const rte10 = await getRouteData('Route 10', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/route-10');

//     fullList = fullList.concat(rte1);
//     fullList = fullList.concat(rte2);
//     fullList = fullList.concat(rte3);
//     fullList = fullList.concat(rte4);
//     fullList = fullList.concat(rte5);
//     fullList = fullList.concat(rte6);
//     fullList = fullList.concat(rte7);
//     fullList = fullList.concat(rte8);
//     fullList = fullList.concat(rte9);
//     fullList = fullList.concat(rte10);

//     const toWrite = JSON.stringify(fullList, null, 2);

//     fs.writeFile('./assets/routes/routes.json', toWrite, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// }

// fetchData();

