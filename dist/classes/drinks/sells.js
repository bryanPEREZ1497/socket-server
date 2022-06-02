"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sells = void 0;
const drink_1 = require("./drink");
const sell_1 = require("./sell");
class Sells {
    constructor(inventory) {
        this.inventory = inventory;
        this.sellsList = [];
    }
    sellDrink(flavor, size) {
        if (flavor.length === 1) {
            const AreIngredientsAvailable = this.inventory.checkStock(flavor, size);
            if (AreIngredientsAvailable) {
                const drink = new drink_1.Drink(1, flavor, size);
                const sell = new sell_1.Sell(drink, 1);
                this.sellsList.push(sell);
                this.inventory.updateStock(drink);
                return drink;
            }
            throw new Error("");
        }
        const AreIngredientsAvailable = this.inventory.checkStock(flavor, size);
        if (AreIngredientsAvailable) {
            const drink = new drink_1.Drink(1, flavor, size);
            const sell = new sell_1.Sell(drink, 1);
            this.sellsList.push(sell);
            this.inventory.updateStock(drink);
            return drink;
        }
        throw new Error("");
    }
}
exports.Sells = Sells;
