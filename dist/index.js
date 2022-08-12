"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.default.instance;
// BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// CORS
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
// Rutas de servicios
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
// import inquirer, { QuestionCollection } from 'inquirer';
// import { Drink } from './classes/drinks/drink';
// import { Inventory } from './classes/drinks/inventory';
// import { SalesObserverC } from './classes/drinks/SalesObserverC';
// import { Sales } from './classes/drinks/sells';
// const inventory = new Inventory();
// const seller = new Sales(inventory);
// const observer = new SalesObserverC(); 
// const observer2 = new SalesObserverC(); 
// seller.attach(observer);
// seller.attach(observer2);
// console.log('Hi, welcome to your Selled Drinks Tracker ');
// const questions: QuestionCollection = [
//     {
//         type: 'rawlist',
//         name: 'initialOptions',
//         message: 'Please, select one',
//         choices: ['Watch inventory', 'Sell a drink', 'Exit'],
//     },
//     {
//         type: 'list',
//         name: 'size',
//         message: 'Select one size for the drink',
//         choices: ['Large', 'Medium', 'Small'],
//         when(answers: { initialOptions: string; }) {
//             return answers.initialOptions === 'Sell a drink';
//         },
//         filter(val: string) {
//             return val.toLowerCase();
//         },
//     },
//     {
//         type: 'checkbox',
//         name: 'flavor',
//         message: 'Select one o more flavors for the drink',
//         choices: [
//             {
//                 name: 'Banana',
//                 // checked: true,
//                 // disabled: 'out of stock',
//             },
//             {
//                 name: 'Strawberry',
//             },
//             {
//                 name: 'Mango',
//             }
//         ],
//         when(answers: { initialOptions: string; }) {
//             return answers.initialOptions === 'Sell a drink';
//         },
//         validate(answer) {
//             if (answer.length < 1) {
//                 return 'You must choose at least one flavor.';
//             }
//             return true
//         },
//         filter(arr) {
//             return arr.map((el: string) => el.toLowerCase())
//         },
//     },
// ]
// function menuPrompt(): void {
//     inquirer.prompt(questions)
//         .then((answers) => {
//             if (answers.initialOptions === 'Exit') {
//                 console.log('\nGood Bye\n');
//                 return;
//             }
//             if (answers.initialOptions === 'Watch inventory') {
//                 console.log('\nInventory:');
//                 console.table(inventory.showStock(), ['name', 'amount'])
//                 menuPrompt();
//             }
//             if (answers.initialOptions === 'Sell a drink') {
//                 const { flavor, size } = answers
//                 try {
//                     const drinkSelled:Drink = seller.sellDrink(flavor, size);
//                     console.log(`\nDrink Flavor: ${drinkSelled.flavor} \nSize ${drinkSelled.size}\n`);
//                     menuPrompt();
//                 } catch (error) {
//                     console.log('\nThere is no ingredients enough\n')
//                     menuPrompt();
//                 }
//             }
//         });
// }
// menuPrompt();
// import http from "http";
// import fs from "fs";
// const server = http.createServer(function (req, res) {
//     fs.readFile(`./data.txt`, (err, data) => {
//         if (err) {
//             res.end(err);
//             // console.log(err)
//         }
//         res.end(data);
//         // console.log(data)
//     });
// });
// const server = http.createServer((req, res) => {
//     const stream = fs.createReadStream(`./data.txt`);
//     stream.pipe(res);
// });
// server.listen(3000);
