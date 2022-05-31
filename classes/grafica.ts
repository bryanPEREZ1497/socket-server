
export class GraficaData {

    private labels: string[] = [];
    private valores: number[] = [0, 0];

    constructor() { }

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


}