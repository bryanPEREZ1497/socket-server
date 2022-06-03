import { ingredients } from "./inventory-mock";
import { Recipe } from "./Recipe";

export const drinkRecipes: Recipe = {
    sizes: {
        small: {
            // drinkAmount: 300,
            //15 units
            blendedFruit: 150,//150*15=2250
            ice: 90,//1350
            condensedMilk: 80,//1200
            sugar: 24//360
        },
        medium: {
            // drinkAmount: 600,
            //10 units
            blendedFruit: 300,//3000
            ice: 180,//1800,etc
            condensedMilk: 120,
            sugar: 48
        },
        large: {
            // drinkAmount: 900,
            //7 units
            blendedFruit: 450,//6750
            ice: 270,//4050
            condensedMilk: 180,//2700
            sugar: 72//1080
        },
    }

}

ingredients

const costs = {
    ice:{
        per:30,
        cost:1,
        // amount: ingredients[3].amount,
        total:ingredients[3].amount/30,
        get getPer() {return this.cost},
    },
    condensedMilk:{
        per:20,
        cost:1
    },
    sugar:{
        per:8,
        cost:1
    },
    banana:{
        per:2,
        cost:1
    },
    strawberry:{
        per:2,
        cost:1
    },
    mango:{
        per:2,
        cost:1
    },
}

const prices = {
    small: 1,
    medium: 1,
    large: 1,
}