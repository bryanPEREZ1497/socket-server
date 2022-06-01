export type SizeType = '300' | '700' | '900';
export type FlavorType = 'bananas' | 'strawberries' | 'mangos';

export class Drink {

    constructor(
        public id: number,
        public flavor: string,
        public size: string,

    ) {
    }

}