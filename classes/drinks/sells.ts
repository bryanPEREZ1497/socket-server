import { Drink } from "./drink";
import { Inventory } from "./inventory";
import { Sell } from "./sell";

export class Sells {
    constructor(private inventory: Inventory) {

    }

    sellsList: Sell[] = [];

    sellDrink(flavor: string, size: string) {
        // const drink = new Drink(1, flavor, size);
        // const isIngredientsAvailable = this.inventory.checkStock(drink);
        // if (isIngredientsAvailable) {
        //     const sell = new Sell(drink, 1);
        //     this.sellsList.push(sell)
        //     this.inventory.updateStock(drink);
            return 'Selled'
        // }
        // return 'There is no ingredients enough'
 
    }
}