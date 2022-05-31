"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraficaData = void 0;
class GraficaData {
    constructor() {
        this.labels = [];
        this.valores = [0, 0];
    }
    setLabels(labels) {
        this.labels = labels;
    }
    getDataGrafica() {
        return this.valores;
    }
    incrementarValor(opcion, valor) {
        this.valores[opcion] += valor;
        return this.getDataGrafica();
    }
}
exports.GraficaData = GraficaData;
