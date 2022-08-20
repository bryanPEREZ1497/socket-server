"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = void 0;
const recipes_mock_1 = require("./recipes-mock");
exports.operations = {
    checkStock(flavor, size, stock) {
        const drinkRecipe = recipes_mock_1.drinkRecipes.sizes[size];
        const amountPerFlavor = (drinkRecipe.blendedFruit) / flavor.length;
        for (let stockEl of stock) {
            if (stockEl.name === 'banana' ||
                stockEl.name === 'strawberry' ||
                stockEl.name === 'mango') {
                if (flavor.includes(stockEl.name)) {
                    if (stockEl.amount < amountPerFlavor)
                        return false;
                }
            }
            else {
                if (stockEl.amount < drinkRecipe[stockEl.name])
                    return false;
            }
        }
        return true;
    },
    updateStock(drink, stock) {
        const size = drink.size;
        const drinkRecipe = recipes_mock_1.drinkRecipes.sizes[size];
        const amountPerFlavor = (drinkRecipe.blendedFruit) / drink.flavor.length;
        for (let stockEl of stock) {
            if (stockEl.name === 'banana'
                || stockEl.name === 'strawberry'
                || stockEl.name === 'mango') {
                if (drink.flavor.includes(stockEl.name)) {
                    stockEl.amount -= amountPerFlavor;
                }
            }
            else {
                stockEl.amount -= drinkRecipe[stockEl.name];
            }
        }
    }
};
//# sourceMappingURL=operations.js.map