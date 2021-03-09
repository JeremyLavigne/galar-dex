const getPokemonList = require("./src/getPokemonList");

getPokemonList('https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/pokedex-galar').then(list => {
    console.log(list);
})
