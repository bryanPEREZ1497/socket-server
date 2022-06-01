"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const inventory_mock_1 = require("./inventory-mock");
class Inventory {
    constructor() {
        this.ingredientsList = inventory_mock_1.ingredients;
    }
    updateStock(drink) {
        utils.updateStock(drink, this.ingredientsList);
    }
    checkStock(flavor, size) {
        return true;
    }
    showStock() {
        return this.ingredientsList;
    }
}
exports.Inventory = Inventory;
const drinkRecipes = {
    sizes: {
        small: {
            // drinkAmount: 300,
            //15
            blendedFruit: 150,
            ice: 90,
            condensedMilk: 80,
            sugar: 24 //360
        },
        medium: {
            // drinkAmount: 600,
            //10
            blendedFruit: 300,
            ice: 180,
            condensedMilk: 120,
            sugar: 48
        },
        large: {
            // drinkAmount: 900,
            //7
            blendedFruit: 450,
            ice: 270,
            condensedMilk: 180,
            sugar: 72 //1080
        },
    }
};
const utils = {
    updateStock(drink, stock) {
        const size = drink.size;
        const drinkRecipe = drinkRecipes.sizes[size];
        switch (size) {
            case 'small':
                for (let stockEl of stock) {
                    if (stockEl.name === drink.flavor) {
                        stockEl.amount -= drinkRecipe.blendedFruit;
                        break;
                    }
                    else {
                        stockEl.amount -= drinkRecipe[stockEl.name];
                    }
                }
                break;
            case 'medium':
                for (let stockEl of stock) {
                    if (stockEl.name === drink.flavor) {
                        stockEl.amount -= drinkRecipe.blendedFruit;
                        break;
                    }
                    else {
                        stockEl.amount -= drinkRecipe[stockEl.name];
                    }
                }
                break;
            case 'large':
                for (let stockEl of stock) {
                    if (stockEl.name === drink.flavor) {
                        stockEl.amount -= drinkRecipe.blendedFruit;
                        break;
                    }
                    else {
                        stockEl.amount -= drinkRecipe[stockEl.name];
                    }
                }
                break;
            default:
                throw new Error("No size selected");
                break;
        }
    }
};
