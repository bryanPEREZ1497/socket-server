import { Drink } from "./drink";
import { drinkRecipes } from "./recipes-mock";

export const operations = {
    checkStock(flavor: string[], size: string, stock: Ingredient[]) {
        const drinkRecipe = drinkRecipes.sizes[size];
        const amountPerFlavor = (drinkRecipe.blendedFruit) / flavor.length;

        for (let stockEl of stock) {
            if (stockEl.name === 'banana' ||
                stockEl.name === 'strawberry' ||
                stockEl.name === 'mango') {
                if (flavor.includes(stockEl.name)) {

                    if (stockEl.amount < amountPerFlavor) return false;
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
        const amountPerFlavor = (drinkRecipe.blendedFruit) / drink.flavor.length;

        for (let stockEl of stock) {
            if (stockEl.name === 'banana'
                || stockEl.name === 'strawberry'
                || stockEl.name === 'mango') {

                if (drink.flavor.includes(stockEl.name)) {


                    stockEl.amount -= amountPerFlavor;
                }
            } else {
                stockEl.amount -= drinkRecipe[stockEl.name]
            }

        }

    }

}
