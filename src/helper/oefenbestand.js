import { inventory } from "../constants/inventory.js";
/* vraag 1a */
const tvTypes = inventory.map((tv) => tv.type);
/* vraag 1b */
const soldOutTvs = inventory.filter((tv) => {
    return tv.sold === tv.originalStock;
});

function showOutcomeInConsole() {
    console.log('uitkomst opdracht 1a: ', tvTypes );
    console.log('uitkomst opdracht 1b: ', soldOutTvs );
}

export default showOutcomeInConsole;