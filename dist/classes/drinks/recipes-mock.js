"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drinkRecipes = void 0;
const inventory_mock_1 = require("./inventory-mock");
exports.drinkRecipes = {
    sizes: {
        small: {
            // drinkAmount: 300,
            //15 units
            blendedFruit: 150,
            ice: 90,
            condensedMilk: 80,
            sugar: 24 //360
        },
        medium: {
            // drinkAmount: 600,
            //10 units
            blendedFruit: 300,
            ice: 180,
            condensedMilk: 120,
            sugar: 48
        },
        large: {
            // drinkAmount: 900,
            //7 units
            blendedFruit: 450,
            ice: 270,
            condensedMilk: 180,
            sugar: 72 //1080
        },
    }
};
inventory_mock_1.ingredients;
const costs = {
    ice: {
        per: 30,
        cost: 1,
        // amount: ingredients[3].amount,
        total: inventory_mock_1.ingredients[3].amount / 30,
        get getPer() { return this.cost; },
    },
    condensedMilk: {
        per: 20,
        cost: 1
    },
    sugar: {
        per: 8,
        cost: 1
    },
    banana: {
        per: 2,
        cost: 1
    },
    strawberry: {
        per: 2,
        cost: 1
    },
    mango: {
        per: 2,
        cost: 1
    },
};
const prices = {
    small: 1,
    medium: 1,
    large: 1,
};
//# sourceMappingURL=recipes-mock.js.map