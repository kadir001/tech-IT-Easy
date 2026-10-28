
export function calculateTotalBought(inventory) {
    let totalBuy = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalBuy += inventory[i].originalStock;
    }

    return totalBuy;
}
