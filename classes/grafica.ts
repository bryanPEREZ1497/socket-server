
export class GraficaData {

    private static _instance: GraficaData;
    private labels: string[] = [];
    private valores: number[] = [0, 0];

    constructor() { }
    
    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    setLabels(labels: string[]) {
        this.labels = labels;
    }

    getDataGrafica() {
        return this.valores;
    }

    incrementarValor(opcion: number, valor: number) {

        this.valores[opcion] += valor;
        return this.getDataGrafica();

    }

    resetValues(){
        this.valores = [0, 0];
        return this.getDataGrafica();
    }


}