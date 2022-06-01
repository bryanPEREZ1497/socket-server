export interface Recipe {
    sizes: {
        [key: string]: {
            [key: string]: number;
        };
    };
}
