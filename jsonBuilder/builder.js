// const getPokemonList = require("./getPokemonList");
const fs = require('fs');
// const getRouteData = require('./getRouteData');
// const getWildLandData = require('./getWildLandData');

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

// const fetchData = async () => {
//     let fullList = [];
//     const rte1 = await getRouteData('Abords de Motorby', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/abords-motorby');
//     const rte2 = await getRouteData('Forêt de Lumirinth', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/foret-lumirinth');
//     const rte3 = await getRouteData('Forêt de Sleepwood', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/foret-sleepwood');
//     const rte4 = await getRouteData('Mine de Galar', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/mine-galar');
//     const rte5 = await getRouteData('Mine de Galar n°2', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/mine-galar-2');
//     const rte6 = await getRouteData('Sentier de la Gare', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/sentier-gare');

//     fullList = fullList.concat(rte1);
//     fullList = fullList.concat(rte2);
//     fullList = fullList.concat(rte3);
//     fullList = fullList.concat(rte4);
//     fullList = fullList.concat(rte5);
//     fullList = fullList.concat(rte6);

//     const toWrite = JSON.stringify(fullList, null, 2);

//     fs.writeFile('./assets/routes/others.json', toWrite, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// }

// fetchData();

// const fetchData = async () => {
//     let fullList = [];

// const rte1 = await getWildLandData('Berges de Motorby', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/berges-motorby');
// const rte2 = await getWildLandData('Bois de Clairjour', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/bois-clairjour');
// const rte3 = await getWildLandData('Coiffe du Géant', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/coiffe-geant');
// const rte4 = await getWildLandData('Fosse des Sables', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/fosse-sables');
// const rte5 = await getWildLandData('Lac Coupenotte Est', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/lac-coupenotte-est');
// const rte6 = await getWildLandData('Lac Coupenotte Ouest', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/lac-coupenotte-ouest');

// const rte7 = await getWildLandData('Lac Milobellus Nord', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/lac-milobellus-nord');
// const rte8 = await getWildLandData('Lac Milobellus Sud', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/lac-milobellus-sud');
// const rte9 = await getWildLandData('Lac Ouragan', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/lac-ouragan');
// const rte10 = await getWildLandData('Miroir du Géant', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/miroir-geant');
// const rte11 = await getWildLandData('Oeil du Lac', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/oeil-lac');
// const rte12 = await getWildLandData('Plaine Rocheuse', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/plaine-rocheuse');

// const rte13 = await getWildLandData('Plaine Verdoyante', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/plaine-verdoyante');
// const rte14 = await getWildLandData('Plateau de Kickenham', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/plateau-kickenham');
// const rte15 = await getWildLandData('Prairie Entre-Ponts', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/prairie-entre-ponts');
// const rte16 = await getWildLandData('Siège du Géant', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/siege-geant');
// const rte17 = await getWildLandData('Tour en ruines', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/guide-des-lieux/tour-ruines');

// fullList = fullList.concat(rte1);
// fullList = fullList.concat(rte2);
// fullList = fullList.concat(rte3);
// fullList = fullList.concat(rte4);
// fullList = fullList.concat(rte5);
// fullList = fullList.concat(rte6);
// fullList = fullList.concat(rte7);
// fullList = fullList.concat(rte8);
// fullList = fullList.concat(rte9);
// fullList = fullList.concat(rte10);
// fullList = fullList.concat(rte11);
// fullList = fullList.concat(rte12);
// fullList = fullList.concat(rte13);
// fullList = fullList.concat(rte14);
// fullList = fullList.concat(rte15);
// fullList = fullList.concat(rte16);
// fullList = fullList.concat(rte17);

//     const toWrite = JSON.stringify(fullList, null, 2);

//     fs.writeFile('./assets/routes/wild-land2.json', toWrite, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// }

// fetchData();

// const pok1 = require('../src/assets/pokedex.json');
// const pok2 = require('../src/assets/pokedexEn.json');

// const newOne = [];

// for (let i = 0; i < pok1.length; i += 1) {
//     const item = {
//         galarId: pok1[i].galarId,
//         nationalId: pok2[i].nationalID.toString(),
//         nameFr: pok1[i].nameFr,
//         nameEn: pok2[i].name,
//         types: pok2[i].types,
//         evo: pok1[i].evo,
//         localisation: pok1[i].localisation
//     }
//     newOne.push(item);
// }

// const toWrite = JSON.stringify(newOne, null, 2);

// fs.writeFile('./pokedex2.json', toWrite, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

