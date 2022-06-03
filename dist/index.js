"use strict";
// import Server from './classes/server';
// import router from './routes/router';
// import bodyParser from 'body-parser';
// import cors from 'cors';
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
const SalesObserverC_1 = require("./classes/drinks/SalesObserverC");
const sells_1 = require("./classes/drinks/sells");
const inventory = new inventory_1.Inventory();
const seller = new sells_1.Sales(inventory);
const observer = new SalesObserverC_1.SalesObserverC();
const observer2 = new SalesObserverC_1.SalesObserverC();
seller.attach(observer);
seller.attach(observer2);
console.log('Hi, welcome to your Selled Drinks Tracker ');
const questions = [
    {
        type: 'rawlist',
        name: 'initialOptions',
        message: 'Please, select one',
        choices: ['Watch inventory', 'Sell a drink', 'Exit'],
    },
    {
        type: 'list',
        name: 'size',
        message: 'Select one size for the drink',
        choices: ['Large', 'Medium', 'Small'],
        when(answers) {
            return answers.initialOptions === 'Sell a drink';
        },
        filter(val) {
            return val.toLowerCase();
        },
    },
    {
        type: 'checkbox',
        name: 'flavor',
        message: 'Select one o more flavors for the drink',
        choices: [
            {
                name: 'Banana',
                // checked: true,
                // disabled: 'out of stock',
            },
            {
                name: 'Strawberry',
            },
            {
                name: 'Mango',
            }
        ],
        when(answers) {
            return answers.initialOptions === 'Sell a drink';
        },
        validate(answer) {
            if (answer.length < 1) {
                return 'You must choose at least one flavor.';
            }
            return true;
        },
        filter(arr) {
            return arr.map((el) => el.toLowerCase());
        },
    },
];
function menuPrompt() {
    inquirer_1.default.prompt(questions)
        .then((answers) => {
        if (answers.initialOptions === 'Exit') {
            console.log('\nGood Bye\n');
            return;
        }
        if (answers.initialOptions === 'Watch inventory') {
            console.log('\nInventory:');
            console.table(inventory.showStock(), ['name', 'amount']);
            menuPrompt();
        }
        if (answers.initialOptions === 'Sell a drink') {
            const { flavor, size } = answers;
            try {
                const drinkSelled = seller.sellDrink(flavor, size);
                console.log(`\nDrink Flavor: ${drinkSelled.flavor} \nSize ${drinkSelled.size}\n`);
                menuPrompt();
            }
            catch (error) {
                console.log('\nThere is no ingredients enough\n');
                menuPrompt();
            }
        }
    });
}
menuPrompt();
