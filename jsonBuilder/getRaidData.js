const axios = require('axios');
const cheerio = require('cheerio');

const getRaidData = async (routeName, url) => {
    const page = await axios.get(url);

    if (!page) {
        console.error(`failed to load ${url}`);
        return [];
    }

    const $ = cheerio.load(page.data);

    const data = [];
    $('.listh-bipcode')
        .each((i, el) => {
            const helper = []; 
            $('li', el).each((j, elt) => {
                helper.push($(elt).text());
            });
            data.push(helper);
        });

    const fullList = [];
    let stars = 1;

    for (let i = 1; i < data.length - 2; i += 1) {

        if (data[i].length > 0) {
            const pokemons = [];
            const percentages = [];

            for (let j = 0; j < data[i].length; j += 1) {
                const index = data[i][j].search('%') - 2;
                pokemons.push(data[i][j].substr(0, index));
                percentages.push(data[i][j].substr(index, 2))
            }
            
            const item = {
                antre: routeName,
                stars: stars.toString(),
                pokemons: pokemons,
                percentages: percentages
            };

            stars += 1;
            fullList.push(item);
        }
    }

    fullList.pop();
    fullList.pop();
    fullList.pop();

    return fullList;
};

module.exports = getRaidData;