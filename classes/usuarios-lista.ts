import { Usuario } from './usuario';


export class UsuariosLista {

    private lista: Usuario[] = [];


    constructor() { }

    // Agregar un usuario
    public agregar(usuario: Usuario) {

        this.lista.push(usuario);
        console.log(this.lista);
        return usuario
    }

    public actualizarNombre(id: string, nombre: string) {


        for (let usuario of this.lista) {

            if (usuario.id === id) {
                usuario.yaVoto = false;
                usuario.voto = false;
                usuario.nombre = nombre;
                break;
            }

        }


        console.log('===== Actualizando usuario ====');
        console.log(this.lista);

    }

    // Obtener lista de usuarios
    public getLista() {
        return this.lista.filter(u => u.nombre !== 'sin-nombre');
    }

    // Obtener un usuario
    public getUsuario(id: string) {

        return this.lista.find(usuario => usuario.id === id);

    }

    // Obtener usuario en una sala en particular
    public getUsuariosEnSala(sala: string) {

        return this.lista.filter(usuario => usuario.sala === sala);

    }

    // Borrar Usuario
    public borrarUsuario(id: string) {

        const tempUsuario = this.getUsuario(id);

        this.lista = this.lista.filter(usuario => usuario.id !== id);

        return tempUsuario;

    }

    public votar(id: string, voto: ('yes' | 'no')) {
        const tempUsuario = this.getUsuario(id);
        tempUsuario!.yaVoto = true;

        if (voto === 'yes') {
            tempUsuario!.voto = true;
        } else {

            tempUsuario!.voto = false;
        }

        return tempUsuario;

    }

    /**
     * nullVote
     */
    public nullVote(id: string) {
        const tempUsuario = this.getUsuario(id);
        tempUsuario!.yaVoto = false;
        return tempUsuario;
    }

    public nullVotes() {
        this.lista.forEach(user => {
            user!.yaVoto = false;
        });
    }


}