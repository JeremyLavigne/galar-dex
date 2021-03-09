const axios = require('axios');
const cheerio = require('cheerio');

// Test
const getPokemonList = async (url) => {
    const page = await axios.get(url);

    if (!page) {
        console.error(`failed to load ${url}`);
        return [];
    }

    const $ = cheerio.load(page.data);

    const data = [];
    $('td')
        //.filter((i, el) => $(el).text() !== '\n' && !$(el).text().match('Live'))
        .each((i, el) => {
            data.push($(el).text());
        });

    // $('td')
    //     .filter((i, el) => typeof $(el).parent().parent().attr('class') === 'undefined')
    //     .each((i, el) => {
    //         const helper = []; // 2 span : [homeTeam, AwayTeam]
    //         $('span', el).each((j, elt) => {
    //             helper.push($(elt).text());
    //         });
    //         pokemonIds.push(helper);
    //     });

    // const pokemonNamesFr = [];
    // $('.table-main--leaguefixtures .h-text-right')
    //     .filter((i, el) => $(el).text() !== '\n' && !$(el).text().match('Live'))
    //     .each((i, el) => {
    //         pokemonNamesFr.push($(el).text());
    //     });

    // PokemonNamesEn
    // Types

    const fullList = [];

    for (let i = 0; i < data.length; i += 6) {
        const item = {
            galarId: data[i],
            nameFr: data[i + 2],
            localisation: data[i + 5],
        };
        fullList.push(item);
    }

    return fullList;
};

module.exports = getPokemonList;