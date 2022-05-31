"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
// import { Drink } from "./drink";
var Amounts;
(function (Amounts) {
    Amounts[Amounts["bananas"] = 300] = "bananas";
    Amounts[Amounts["strawberries"] = 300] = "strawberries";
    Amounts[Amounts["mangos"] = 300] = "mangos";
})(Amounts || (Amounts = {}));
class Inventory {
    constructor() {
        this.ingredientsList = [];
    }
    getIngredient(name) {
        // return this.ingredientsList.find(ingredient => ingredient.name === name);
    }
    getIngredients() {
        return this.ingredientsList;
    }
    static checkStock(drink) {
        throw new Error("Method not implemented.");
    }
    static subtractStock(drink) {
        drink.flavors.forEach((flavor) => {
            let ingredient = this.getIngredient(flavor);
            // ingredient.amount -= Amounts[flavor];}
        });
    }
    static getIngredient(name) {
        return this.ingredientsList.find((ingredient) => ingredient.name === name);
    }
}
exports.Inventory = Inventory;
