import { Drink } from "./drink";
import { ingredients } from "./inventory-mock";
import { operations } from "./operations";

export class Inventory {

    private ingredientsList: Ingredient[];

    constructor() {
        this.ingredientsList = ingredients
    }

    updateStock(drink: Drink): void {
        operations.updateStock(drink, this.ingredientsList);
    }

    checkStock(flavor: string[], size: string): boolean {
        return operations.checkStock(flavor, size, this.ingredientsList)
    }

    public showStock() {
        return this.ingredientsList;
    }

}

