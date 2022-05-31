import { Drink } from "./drink";
import { ingredients } from "./inventory-mock";

export class Inventory {

    private ingredientsList: Ingredient[];
    
    constructor() {
        this.ingredientsList = ingredients
    }

    updateStock(drink: Drink) {
        throw new Error("Method not implemented.");
    }

    checkStock(drink: Drink) {
        return false;
    }

    public showStock() {
        return this.ingredientsList;
    }








































    private getIngredient(name: string) {
        // return this.ingredientsList.find(ingredient => ingredient.name === name);
    }

   



    static subtractStock(drink: Drink) {
        // drink.flavors.forEach((flavor: string) => {
        //     let ingredient = this.getIngredient(flavor);
        //     // ingredient.amount -= Amounts[flavor];}
        // });


    }

    static getIngredient(name: string) {
        // return this.ingredientsList.find((ingredient: Ingredient) => ingredient.name === name);

    }

}