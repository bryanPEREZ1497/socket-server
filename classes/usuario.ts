

export class Usuario {

    public id: string;
    public nombre: string;
    public sala: string;
    public yaVoto: boolean;
    public voto: boolean;

    constructor(id: string) {

        this.id = id;
        this.nombre = 'sin-nombre';
        this.sala = 'sin-sala';
        this.yaVoto = false;
        this.voto = false;

    }

}