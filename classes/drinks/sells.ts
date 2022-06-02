import { Drink } from "./drink";
import { Inventory } from "./inventory";
import { Sell } from "./sell";

export class Sells {
    constructor(private inventory: Inventory) {

    }

    sellsList: Sell[] = [];

    sellDrink(flavor: string[], size: string): string {
        if ( flavor.length === 1) {
            const flavorString = flavor[0]; 
            
            const AreIngredientsAvailable = this.inventory.checkStock(flavorString, size);

            if (AreIngredientsAvailable) {
                const drink = new Drink(1, flavorString, size);
                const sell = new Sell(drink, 1);
                this.sellsList.push(sell)
                this.inventory.updateStock(drink);
                return 'Drink Selled'
            }
            return 'There is no ingredients enough'
        } 

        


        return 'There is no ingredients enough'
        

    }



}