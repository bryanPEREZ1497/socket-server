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
            //10
            blendedFruit: 300,//300 0
            ice: 180,//1800,etc
            condensedMilk: 120,
            sugar: 48
        },
        large: {
            // drinkAmount: 900,
            //7
            blendedFruit: 450,//6750
            ice: 270,//4050
            condensedMilk: 180,//2700
            sugar: 72//1080
        },
    }

}