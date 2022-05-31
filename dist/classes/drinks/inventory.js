"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const inventory_mock_1 = require("./inventory-mock");
class Inventory {
    constructor() {
        this.ingredientsList = inventory_mock_1.ingredients;
    }
    updateStock(drink) {
        throw new Error("Method not implemented.");
    }
    checkStock(drink) {
        return false;
    }
    showStock() {
        return this.ingredientsList;
    }
    getIngredient(name) {
        // return this.ingredientsList.find(ingredient => ingredient.name === name);
    }
    static subtractStock(drink) {
        // drink.flavors.forEach((flavor: string) => {
        //     let ingredient = this.getIngredient(flavor);
        //     // ingredient.amount -= Amounts[flavor];}
        // });
    }
    static getIngredient(name) {
        // return this.ingredientsList.find((ingredient: Ingredient) => ingredient.name === name);
    }
}
exports.Inventory = Inventory;
