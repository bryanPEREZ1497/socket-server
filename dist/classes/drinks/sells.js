"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sells = void 0;
class Sells {
    constructor(inventory) {
        this.inventory = inventory;
        this.sellsList = [];
    }
    sellDrink(flavor, size) {
        // const drink = new Drink(1, flavor, size);
        // const isIngredientsAvailable = this.inventory.checkStock(drink);
        // if (isIngredientsAvailable) {
        //     const sell = new Sell(drink, 1);
        //     this.sellsList.push(sell)
        //     this.inventory.updateStock(drink);
        return 'Selled';
        // }
        // return 'There is no ingredients enough'
    }
}
exports.Sells = Sells;
