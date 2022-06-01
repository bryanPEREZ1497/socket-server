"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = void 0;
const recipes_mock_1 = require("./recipes-mock");
exports.operations = {
    checkStock(flavor, size, stock) {
        const drinkRecipe = recipes_mock_1.drinkRecipes.sizes[size];
        for (let stockEl of stock) {
            if (stockEl.name === 'banana' ||
                stockEl.name === 'strawberry' ||
                stockEl.name === 'mango') {
                if (stockEl.name === flavor) {
                    if (stockEl.amount < drinkRecipe.blendedFruit)
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
        for (let stockEl of stock) {
            if (stockEl.name === 'banana' ||
                stockEl.name === 'strawberry' ||
                stockEl.name === 'mango') {
                if (stockEl.name === drink.flavor) {
                    stockEl.amount -= drinkRecipe.blendedFruit;
                }
            }
            else {
                stockEl.amount -= drinkRecipe[stockEl.name];
            }
        }
    }
};
