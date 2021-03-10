const axios = require('axios');
const cheerio = require('cheerio');

const getRouteData = async (routeName, url) => {
    const page = await axios.get(url);

    if (!page) {
        console.error(`failed to load ${url}`);
        return [];
    }

    const $ = cheerio.load(page.data);

    const data = [];
    $('.bipcode')
        .each((i, el) => {
            const helper = []; 
            $('tr', el).each((j, elt) => {
                helper.push($(elt).text());
            });
            data.push(helper);
        });

    const fullList = [];

    for (let i = 0; i < data.length - 2; i += 1) {

        if (data[i].length === 6) {
            const index = data[i][1].search('Niveau');
            const item = {
                route: routeName,
                level: data[i][1].substr(index, 9),
                where: 'Fixe',
                pokemons: [data[i][0]],
                percentages: ['100%']
            };
            fullList.push(item);
        }
        if (data[i].length === 3) {
            const index = data[i][0].search('Niveau');
            const item = {
                route: routeName,
                level: data[i][0].substr(index),
                where: data[i][0].substr(0, index),
                pokemons: data[i][1].split('-'),
                percentages: data[i][2].split('%')
            };
            // item.pokemons.pop();
            // item.percentages.pop();
            fullList.push(item);
        }
    }

    return fullList;
};

module.exports = getRouteData;