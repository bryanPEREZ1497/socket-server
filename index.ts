// import Server from './classes/server';
// import router from './routes/router';
// import bodyParser from 'body-parser';
// import cors from 'cors';



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

import inquirer, { QuestionCollection } from 'inquirer';
import { Drink } from './classes/drinks/drink';
import { Inventory } from './classes/drinks/inventory';
import { Sales } from './classes/drinks/sells';

const inventory = new Inventory();

const seller = new Sales(inventory);

console.log('Hi, welcome to your Selled Drinks Tracker ');


const questions: QuestionCollection = [
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
        when(answers: { initialOptions: string; }) {
            return answers.initialOptions === 'Sell a drink';
        },
        filter(val: string) {
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
        when(answers: { initialOptions: string; }) {
            return answers.initialOptions === 'Sell a drink';
        },
        validate(answer) {
            if (answer.length < 1) {
                return 'You must choose at least one flavor.';
            }
            return true
        },
        filter(arr) {
            return arr.map((el: string) => el.toLowerCase())
        },
    },

]

function menuPrompt(): void {


    inquirer.prompt(questions)
        .then((answers) => {

            if (answers.initialOptions === 'Exit') {
                console.log('\nGood Bye\n');
                return;
            }

            if (answers.initialOptions === 'Watch inventory') {
                console.log('\nInventory:');
                console.table(inventory.showStock(), ['name', 'amount'])
                menuPrompt();
            }

            if (answers.initialOptions === 'Sell a drink') {
                const { flavor, size } = answers

                try {
                    const drinkSelled:Drink = seller.sellDrink(flavor, size);

                    console.log(`\nDrink Flavor: ${drinkSelled.flavor} \nSize ${drinkSelled.size}\n`);
                    menuPrompt();

                } catch (error) {
                    console.log('\nThere is no ingredients enough\n')
                    menuPrompt();

                }

            }

        });
}

menuPrompt();

