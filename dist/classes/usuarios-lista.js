"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
class UsuariosLista {
    constructor() {
        this.lista = [];
    }
    // Agregar un usuario
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    actualizarNombre(id, nombre) {
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
    getLista() {
        return this.lista.filter(u => u.nombre !== 'sin-nombre');
    }
    // Obtener un usuario
    getUsuario(id) {
        return this.lista.find(usuario => usuario.id === id);
    }
    // Obtener usuario en una sala en particular
    getUsuariosEnSala(sala) {
        return this.lista.filter(usuario => usuario.sala === sala);
    }
    // Borrar Usuario
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        return tempUsuario;
    }
    votar(id, voto) {
        const tempUsuario = this.getUsuario(id);
        tempUsuario.yaVoto = true;
        if (voto === 'yes') {
            tempUsuario.voto = true;
        }
        else {
            tempUsuario.voto = false;
        }
        return tempUsuario;
    }
    /**
     * nullVote
     */
    nullVote(id) {
        const tempUsuario = this.getUsuario(id);
        tempUsuario.yaVoto = false;
        return tempUsuario;
    }
    nullVotes() {
        this.lista.forEach(user => {
            user.yaVoto = false;
        });
    }
}
exports.UsuariosLista = UsuariosLista;
