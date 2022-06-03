import { Drink } from "./drink";
import { Inventory } from "./inventory";
import { SalesObserverI } from "./SalesObserverI";
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
                this.notify();
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
            this.notify();

            return drink
        }


        throw new Error("");


    }


    private _observers: SalesObserverI[] = [];
    public get observers(): SalesObserverI[] {
        return this._observers;
    }
    public set observers(v: SalesObserverI[]) {
        this._observers = v;
    }


    attach(observer: SalesObserverI): void {
        this._observers.push(observer)
    };

    detach(observer: SalesObserverI): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            // return console.log('Subject: Nonexistent observer.');
            return;
        }

        this.observers.splice(observerIndex, 1);
        // console.log('Subject: Detached an observer.');

    };

    notify(): void {
        for (const observer of this._observers) {
            observer.update(this);
        }
    };

}