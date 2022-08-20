"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const inventory_mock_1 = require("./inventory-mock");
const operations_1 = require("./operations");
class Inventory {
    constructor() {
        this.ingredientsList = inventory_mock_1.ingredients;
    }
    updateStock(drink) {
        operations_1.operations.updateStock(drink, this.ingredientsList);
    }
    checkStock(flavor, size) {
        return operations_1.operations.checkStock(flavor, size, this.ingredientsList);
    }
    showStock() {
        return this.ingredientsList;
    }
}
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.js.map