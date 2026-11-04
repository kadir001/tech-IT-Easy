import { inventory } from "../constants/inventory.js";

/* vraag 1a */
const tvTypes = inventory.map((tv) => tv.type);

/* vraag 1b */
const soldOutTvs = inventory.filter((tv) => {
    return tv.sold === tv.originalStock;
});

/* vraag 1c*/
const specificTV = inventory.find((tv) => {
    return tv.type === 'NH3216SMART';
});

/* vraag 1d*/
const filteredTVs = inventory.map((tv) => {
    return {
        name: `${tv.brand} ${tv.name}`,
        suitable: tv.refreshRate >= 100
    };
});

/* vraag 1e */
const largeTVs = inventory.filter((tv) => {
    return tv.availableSizes.some((size) => size >= 65);
});

/* vraag 1f*/
const ambilightTVs = inventory.filter((tv) => {
    return tv.options.includes('ambilight');
});


function showOutcomeInConsole() {
    console.log('uitkomst opdracht 1a: ', tvTypes );
    console.log('uitkomst opdracht 1b: ', soldOutTvs );
    console.log('uitkomst opdracht 1c: ', specificTV);
    console.log('1d', filteredTVs);
    console.log('1e', largeTVs);
    console.log('1f', ambilightTVs);
}

export default showOutcomeInConsole;