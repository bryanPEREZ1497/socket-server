import { SalesObserverI } from "./SalesObserverI";
import { Sales } from "./sells";

export class SalesObserverC implements SalesObserverI {
    update(subject: Sales): void{
        console.log('From Obs')
    };
}