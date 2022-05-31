"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
const inventory_1 = require("./inventory");
class Drink {
    constructor(flavors, size) {
        this.flavors = flavors;
        this.size = size;
        inventory_1.Inventory.checkStock(this);
        inventory_1.Inventory.subtractStock(this);
    }
    prepareDrink() {
    }
}
exports.Drink = Drink;
