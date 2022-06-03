import { Sales } from "./sells";

export interface SalesObserverI {
    update(subject: Sales): void;
}