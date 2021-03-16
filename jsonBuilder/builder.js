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

const getRaidsData = require('./getRaidData');

// const fetchData = async () => {
//     let fullList = [];

// const rte1 = await getRaidsData('Antre 1', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-1');
// const rte2 = await getRaidsData('Antre 2', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-2');
// const rte3 = await getRaidsData('Antre 3', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-3');
// const rte4 = await getRaidsData('Antre 4', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-4');
// const rte5 = await getRaidsData('Antre 5', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-5');
// const rte6 = await getRaidsData('Antre 6', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-6');
// const rte7 = await getRaidsData('Antre 7', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-7');
// const rte8 = await getRaidsData('Antre 8', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-8');
// const rte9 = await getRaidsData('Antre 9', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-9');
// const rte10 = await getRaidsData('Antre 10', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-10');
// const rte11 = await getRaidsData('Antre 11', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-11');
// const rte12 = await getRaidsData('Antre 12', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-12');
// const rte13 = await getRaidsData('Antre 13', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-13');
// const rte14 = await getRaidsData('Antre 14', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-14');
// const rte15 = await getRaidsData('Antre 15', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-15');
// const rte16 = await getRaidsData('Antre 16', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-16');
// const rte17 = await getRaidsData('Antre 17', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-17');
// const rte18 = await getRaidsData('Antre 18', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-18');
// const rte19 = await getRaidsData('Antre 19', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-19');
// const rte20 = await getRaidsData('Antre 20', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-20');
// const rte21 = await getRaidsData('Antre 21', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-21');
// const rte22 = await getRaidsData('Antre 22', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-22');
// const rte23 = await getRaidsData('Antre 23', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-23');
// const rte24 = await getRaidsData('Antre 24', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-24');
// const rte25 = await getRaidsData('Antre 25', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-25');
// const rte26 = await getRaidsData('Antre 26', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-26');
// const rte27 = await getRaidsData('Antre 27', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-27');
// const rte28 = await getRaidsData('Antre 28', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-28');
// const rte29 = await getRaidsData('Antre 29', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-29');
// const rte30 = await getRaidsData('Antre 30', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-30');
// const rte31 = await getRaidsData('Antre 31', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-31');
// const rte32 = await getRaidsData('Antre 32', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-32');
// const rte33 = await getRaidsData('Antre 33', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-33');
// const rte34 = await getRaidsData('Antre 34', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-34');
// const rte35 = await getRaidsData('Antre 35', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-35');
// const rte36 = await getRaidsData('Antre 36', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-36');
// const rte37 = await getRaidsData('Antre 37', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-37');
// const rte38 = await getRaidsData('Antre 38', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-38');
// const rte39 = await getRaidsData('Antre 39', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-39');
// const rte40 = await getRaidsData('Antre 40', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-40');
// const rte41 = await getRaidsData('Antre 41', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-41');

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
// fullList = fullList.concat(rte18);
// fullList = fullList.concat(rte19);
// fullList = fullList.concat(rte20);
// fullList = fullList.concat(rte21);
// fullList = fullList.concat(rte22);
// fullList = fullList.concat(rte23);
// fullList = fullList.concat(rte24);
// fullList = fullList.concat(rte25);
// fullList = fullList.concat(rte26);
// fullList = fullList.concat(rte27);
// fullList = fullList.concat(rte28);
// fullList = fullList.concat(rte29);
// fullList = fullList.concat(rte30);
// fullList = fullList.concat(rte31);
// fullList = fullList.concat(rte32);
// fullList = fullList.concat(rte33);
// fullList = fullList.concat(rte34);
// fullList = fullList.concat(rte35);
// fullList = fullList.concat(rte36);
// fullList = fullList.concat(rte37);
// fullList = fullList.concat(rte38);
// fullList = fullList.concat(rte39);
// fullList = fullList.concat(rte40);
// fullList = fullList.concat(rte41);

//     const toWrite = JSON.stringify(fullList, null, 2);

//     fs.writeFile('./non-rares2.json', toWrite, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// }

// fetchData();


// const fetchData = async () => {
//     let fullList = [];

// const rte1 = await getRaidsData('Antre 42', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-42');
// const rte2 = await getRaidsData('Antre 43', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-43');
// const rte3 = await getRaidsData('Antre 44', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-44');
// const rte4 = await getRaidsData('Antre 45', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-45');
// const rte5 = await getRaidsData('Antre 46', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-46');
// const rte6 = await getRaidsData('Antre 47', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-47');
// const rte7 = await getRaidsData('Antre 48', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-48');
// const rte8 = await getRaidsData('Antre 49', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-49');
// const rte9 = await getRaidsData('Antre 50', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-50');
// const rte10 = await getRaidsData('Antre 51', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-51');
// const rte11 = await getRaidsData('Antre 52', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-52');
// const rte12 = await getRaidsData('Antre 53', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-53');
// const rte13 = await getRaidsData('Antre 54', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-54');
// const rte14 = await getRaidsData('Antre 55', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-55');
// const rte15 = await getRaidsData('Antre 56', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-56');
// const rte16 = await getRaidsData('Antre 57', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-57');
// const rte17 = await getRaidsData('Antre 58', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-58');
// const rte18 = await getRaidsData('Antre 59', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-59');
// const rte19 = await getRaidsData('Antre 60', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-60');
// const rte20 = await getRaidsData('Antre 61', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-61');
// const rte21 = await getRaidsData('Antre 62', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-62');
// const rte22 = await getRaidsData('Antre 63', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-63');
// const rte23 = await getRaidsData('Antre 64', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-64');
// const rte24 = await getRaidsData('Antre 65', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-65');
// const rte25 = await getRaidsData('Antre 66', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-66');
// const rte26 = await getRaidsData('Antre 67', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-67');
// const rte27 = await getRaidsData('Antre 68', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-68');
// const rte28 = await getRaidsData('Antre 69', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-69');
// const rte29 = await getRaidsData('Antre 70', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-70');
// const rte30 = await getRaidsData('Antre 71', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-71');
// const rte31 = await getRaidsData('Antre 72', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-72');
// const rte32 = await getRaidsData('Antre 73', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-73');
// const rte33 = await getRaidsData('Antre 74', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-74');
// const rte34 = await getRaidsData('Antre 75', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-75');
// const rte35 = await getRaidsData('Antre 76', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-76');
// const rte36 = await getRaidsData('Antre 77', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-77');
// const rte37 = await getRaidsData('Antre 78', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-78');
// const rte38 = await getRaidsData('Antre 79', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-79');
// const rte39 = await getRaidsData('Antre 80', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-80');
// const rte40 = await getRaidsData('Antre 81', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-81');
// const rte41 = await getRaidsData('Antre 82', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-82');
// const rte42 = await getRaidsData('Antre 83', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-83');
// const rte43 = await getRaidsData('Antre 84', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-84');
// const rte44 = await getRaidsData('Antre 85', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-85');
// const rte45 = await getRaidsData('Antre 86', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-86');
// const rte46 = await getRaidsData('Antre 87', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-87');
// const rte47 = await getRaidsData('Antre 88', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-88');
// const rte48 = await getRaidsData('Antre 89', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-89');
// const rte49 = await getRaidsData('Antre 90', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-90');
// const rte50 = await getRaidsData('Antre 91', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-91');
// const rte51 = await getRaidsData('Antre 92', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-92');
// const rte52 = await getRaidsData('Antre 93', 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/raids-dynamax/antre-93');

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
// fullList = fullList.concat(rte18);
// fullList = fullList.concat(rte19);
// fullList = fullList.concat(rte20);
// fullList = fullList.concat(rte21);
// fullList = fullList.concat(rte22);
// fullList = fullList.concat(rte23);
// fullList = fullList.concat(rte24);
// fullList = fullList.concat(rte25);
// fullList = fullList.concat(rte26);
// fullList = fullList.concat(rte27);
// fullList = fullList.concat(rte28);
// fullList = fullList.concat(rte29);
// fullList = fullList.concat(rte30);
// fullList = fullList.concat(rte31);
// fullList = fullList.concat(rte32);
// fullList = fullList.concat(rte33);
// fullList = fullList.concat(rte34);
// fullList = fullList.concat(rte35);
// fullList = fullList.concat(rte36);
// fullList = fullList.concat(rte37);
// fullList = fullList.concat(rte38);
// fullList = fullList.concat(rte39);
// fullList = fullList.concat(rte40);
// fullList = fullList.concat(rte41);
// fullList = fullList.concat(rte42);
// fullList = fullList.concat(rte43);
// fullList = fullList.concat(rte44);
// fullList = fullList.concat(rte45);
// fullList = fullList.concat(rte46);
// fullList = fullList.concat(rte47);
// fullList = fullList.concat(rte48);
// fullList = fullList.concat(rte49);
// fullList = fullList.concat(rte50);
// fullList = fullList.concat(rte51);
// fullList = fullList.concat(rte52);

//     const toWrite = JSON.stringify(fullList, null, 2);

//     fs.writeFile('./rares.json', toWrite, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// }

// fetchData();

