import { Drink } from "./drink";
import { drinkRecipes } from "./recipes-mock";

export const operations = {
    checkStock(flavor: string, size: string, stock: Ingredient[]) {
        const drinkRecipe = drinkRecipes.sizes[size];

        for (let stockEl of stock) {
            if (stockEl.name === 'banana' ||
                stockEl.name === 'strawberry' ||
                stockEl.name === 'mango') {
                if (stockEl.name === flavor) {
                    if (stockEl.amount < drinkRecipe.blendedFruit) return false;
                }

            } else {
                if (stockEl.amount < drinkRecipe[stockEl.name]) return false;
            }

        }

        return true;

    },

    updateStock(drink: Drink, stock: Ingredient[]) {
        const size = drink.size
        const drinkRecipe = drinkRecipes.sizes[size];

        for (let stockEl of stock) {
            if (stockEl.name === 'banana' ||
                stockEl.name === 'strawberry' ||
                stockEl.name === 'mango') {
                if (stockEl.name === drink.flavor) {

                    stockEl.amount -= drinkRecipe.blendedFruit;
                }

            } else {

                stockEl.amount -= drinkRecipe[stockEl.name]
            }

        }

    }
}