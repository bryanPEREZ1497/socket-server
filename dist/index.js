"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const server = Server.instance;
// // BodyParser
// server.app.use( bodyParser.urlencoded({ extended: true }) );
// server.app.use( bodyParser.json() );
// // CORS
// server.app.use( cors({ origin: true, credentials: true  }) );
// // Rutas de servicios
// server.app.use('/', router );
// server.start( () => {
//     console.log(`Servidor corriendo en el puerto ${ server.port }`);
// });
const inquirer_1 = __importDefault(require("inquirer"));
const inventory_1 = require("./classes/drinks/inventory");
const sells_1 = require("./classes/drinks/sells");
const inventory = new inventory_1.Inventory();
const seller = new sells_1.Sells(inventory);
console.log('Hi, welcome to your Selled Drinks Tracker ');
const questions = [
    {
        type: 'rawlist',
        name: 'initialOptions',
        message: 'Please, select one',
        choices: ['Watch inventory', 'Sell a drink'],
    },
    {
        type: 'list',
        name: 'size',
        message: 'Select one size for the drink',
        choices: ['Small', 'Medium', 'Large'],
        when(answers) {
            return answers.initialOptions === 'Sell a drink';
        },
    },
    {
        type: 'list',
        name: 'flavor',
        message: 'Select one flavor for the drink',
        choices: ['banana', 'strawberryfries', 'mango'],
        when(answers) {
            return answers.initialOptions === 'Sell a drink';
        },
    },
];
inquirer_1.default.prompt(questions).then((answers) => {
    console.log('\nInventory:');
    if (answers.initialOptions === 'Watch inventory') {
        // console.log(JSON.stringify(inventory.showStock(), null, '  '));
        console.table(inventory.showStock(), ['name', 'amount']);
    }
    if (answers.initialOptions === 'Sell a drink') {
        const { flavor, size } = answers;
        console.log(seller.sellDrink(flavor, size));
    }
});
