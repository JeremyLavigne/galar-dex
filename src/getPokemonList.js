const axios = require('axios');
const cheerio = require('cheerio');

const getPokemonList = async () => {
    const url = 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/pokedex-galar';
    const page = await axios.get(url);

    if (!page) {
        console.error(`failed to load ${url}`);
        return [];
    }

    const $ = cheerio.load(page.data);

    const data = [];
    $('tr')
        .each((i, el) => {
            const helper = []; // 5 td : [number, img, name, img, talent, localisation]
            $('td', el).each((j, elt) => {
                helper.push($(elt).text());
            });
            data.push(helper);
        });

    const fullList = [];

    for (let i = 3; i < data.length - 6; i += 1) {
        const item = {
            galarId: data[i][0],
            nameFr: data[i][2],
            nameEn: '',
            evo: '',
            localisation: data[i][5].split(','),
        };
        fullList.push(item);
    }

    return fullList;
};

module.exports = getPokemonList;