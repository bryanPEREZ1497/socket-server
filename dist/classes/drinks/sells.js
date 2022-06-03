"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales = void 0;
const drink_1 = require("./drink");
const sell_1 = require("./sell");
class Sales {
    constructor(inventory) {
        this.inventory = inventory;
        this.sellsList = [];
        this._observers = [];
    }
    sellDrink(flavor, size) {
        if (flavor.length === 1) {
            const AreIngredientsAvailable = this.inventory.checkStock(flavor, size);
            if (AreIngredientsAvailable) {
                const drink = new drink_1.Drink(1, flavor, size);
                const sell = new sell_1.Sell(drink, 1);
                this.sellsList.push(sell);
                this.inventory.updateStock(drink);
                this.notify();
                return drink;
            }
            throw new Error("");
        }
        const AreIngredientsAvailable = this.inventory.checkStock(flavor, size);
        if (AreIngredientsAvailable) {
            const drink = new drink_1.Drink(1, flavor, size);
            const sell = new sell_1.Sell(drink, 1);
            this.sellsList.push(sell);
            this.inventory.updateStock(drink);
            this.notify();
            return drink;
        }
        throw new Error("");
    }
    get observers() {
        return this._observers;
    }
    set observers(v) {
        this._observers = v;
    }
    attach(observer) {
        this._observers.push(observer);
    }
    ;
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            // return console.log('Subject: Nonexistent observer.');
            return;
        }
        this.observers.splice(observerIndex, 1);
        // console.log('Subject: Detached an observer.');
    }
    ;
    notify() {
        for (const observer of this._observers) {
            observer.update(this);
        }
    }
    ;
}
exports.Sales = Sales;
