import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';
import { Question } from '../classes/question';


export const usuariosConectados = new UsuariosLista();
export let question = new Question();


export const conectarCliente = (cliente: Socket, io: socketIO.Server) => {

    const usuario = new Usuario(cliente.id);
    usuariosConectados.agregar(usuario);

    // votes(cliente,io);


}


export const desconectar = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');

        usuariosConectados.borrarUsuario(cliente.id);

        io.emit('usuarios-activos', usuariosConectados.getLista());

    });

}


// Escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('mensaje', (payload: { de: string, cuerpo: string }) => {

        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);

    });

}

// Configurar usuario
export const configurarUsuario = (cliente: Socket, io: socketIO.Server) => {

    cliente.on(
        'configurar-usuario',
        (payload: { nombre: string }, callback: Function) => {

            usuariosConectados.actualizarNombre(cliente.id, payload.nombre);

            io.emit('usuarios-activos', usuariosConectados.getLista());

            callback({
                ok: true,
                mensaje: `Usuario ${payload.nombre}, configurado`
            });
        }
    );

}

// Obtener Usuarios
export const obtenerUsuarios = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('obtener-usuarios', () => {

        io.to(cliente.id).emit('usuarios-activos', usuariosConectados.getLista());

    });

}

/**
 * Votes section
 * 
 */

export const emitAnswer = (io: socketIO.Server) => {
    io.emit('answers', question);


};


//Emit votes, receive votes 
export function votes(cliente: Socket, io: socketIO.Server) {
    cliente.on('votes', (payload: { answer: ('yes' | 'no') }) => {

        if (!payload.answer.length) {
            emitAnswer(io);
            return;
        }

        if (!usuariosConectados.getUsuario(cliente.id)?.yaVoto) {
            usuariosConectados.votar(cliente.id, payload.answer);

            payload.answer === 'yes'
                ? question.yesNumber++
                : question.nosNumber++;
        }


        emitAnswer(io);
        io.emit('usuarios-activos', usuariosConectados.getLista());




    });
}

//Rename a question title
export function questions(cliente: Socket, io: socketIO.Server) {
    cliente.on('questions', (payload: { title: string }, callback?: Function) => {

        if (!payload.title) {
            console.log('no hay title');
            if (callback) {

                callback!({ ok: false });
            }
            emitAnswer(io);
            return;
        }


        console.log('si hhay title');

        question.title = payload.title!;

        question.nosNumber = 0;
        question.yesNumber = 0;

        usuariosConectados.nullVotes();

        // console.log(question.title);

        emitAnswer(io);

        if (callback) {

            callback!({ ok: true });
        }



    });
}
