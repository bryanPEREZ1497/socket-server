import { Drink } from "./drink";
import { ingredients } from "./inventory-mock";

export class Inventory {

    private ingredientsList: Ingredient[];

    constructor() {
        this.ingredientsList = ingredients
    }

    updateStock(drink: Drink) {
        utils.updateStock(drink, this.ingredientsList);
    }

    checkStock(flavor: string, size: string) {
        return true;
    }

    public showStock() {
        return this.ingredientsList;
    }

}



interface Recipe {
    sizes: {
        [key: string]: {
            [key: string]: number;
        };
    };
}

const drinkRecipes: Recipe = {
    sizes: {
        small: {
            // drinkAmount: 300,
            //15
            blendedFruit: 150,//150*15=2250
            ice: 90,//1350
            condensedMilk: 80,//1200
            sugar: 24//360
        },
        medium: {
            // drinkAmount: 600,
            //10
            blendedFruit: 300,//3000
            ice: 180,//1800,etc
            condensedMilk: 120,
            sugar: 48
        },
        large: {
            // drinkAmount: 900,
            //7
            blendedFruit: 450,//6750
            ice: 270,//4050
            condensedMilk: 180,//2700
            sugar: 72//1080
        },
    }

}

const utils = {
    updateStock(drink: Drink, stock: Ingredient[]) {
        const size = drink.size
        const drinkRecipe = drinkRecipes.sizes[size];
        switch (size) {
            case 'small':
                for (let stockEl of stock) {
                    if (stockEl.name === drink.flavor) {

                        stockEl.amount -= drinkRecipe.blendedFruit;
                        break;
                    } else {

                        stockEl.amount -= drinkRecipe[stockEl.name]
                    }

                }
                break;
            case 'medium':
                for (let stockEl of stock) {
                    if (stockEl.name === drink.flavor) {

                        stockEl.amount -= drinkRecipe.blendedFruit;
                        break;
                    } else {

                        stockEl.amount -= drinkRecipe[stockEl.name]
                    }

                }
                break;
            case 'large':
                for (let stockEl of stock) {
                    if (stockEl.name === drink.flavor) {

                        stockEl.amount -= drinkRecipe.blendedFruit;
                        break;
                    } else {

                        stockEl.amount -= drinkRecipe[stockEl.name]
                    }

                }
                break;

            default:
                throw new Error("No size selected");

                break;
        }
    }
}