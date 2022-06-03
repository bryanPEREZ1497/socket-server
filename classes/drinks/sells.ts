import { Drink } from "./drink";
import { Inventory } from "./inventory";
import { Sell as Sale } from "./sell";

export class Sales {
    constructor(private inventory: Inventory) {

    }

    sellsList: Sale[] = [];

    sellDrink(flavor: string[], size: string) {
        if (flavor.length === 1) {

            const AreIngredientsAvailable = this.inventory.checkStock(flavor, size);

            if (AreIngredientsAvailable) {
                const drink = new Drink(1, flavor, size);
                const sell = new Sale(drink, 1);
                this.sellsList.push(sell)
                this.inventory.updateStock(drink);
                return drink;
            }
            throw new Error("");

        }

        const AreIngredientsAvailable = this.inventory.checkStock(flavor, size);

        if (AreIngredientsAvailable) {
            const drink = new Drink(1, flavor, size);
            const sell = new Sale(drink, 1);
            this.sellsList.push(sell)
            this.inventory.updateStock(drink);
            return drink
        }


        throw new Error("");


    }

    
    private _observers : Observer[];
    public get observers() : Observer[] {
        return this._observers;
    }
    public set observers(v : Observer[]) {
        this._observers = v;
    }
    

    attach(observer: Observer): void;

    // Detach an observer from the subject.
    detach(observer: Observer): void;

    // Notify all observers about an event.
    notify(): void;

}