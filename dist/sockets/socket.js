"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = exports.votes = exports.emitAnswer = exports.obtenerUsuarios = exports.configurarUsuario = exports.mensaje = exports.desconectar = exports.conectarCliente = exports.question = exports.usuariosConectados = void 0;
const usuarios_lista_1 = require("../classes/usuarios-lista");
const usuario_1 = require("../classes/usuario");
const question_1 = require("../classes/question");
exports.usuariosConectados = new usuarios_lista_1.UsuariosLista();
exports.question = new question_1.Question();
const conectarCliente = (cliente, io) => {
    const usuario = new usuario_1.Usuario(cliente.id);
    exports.usuariosConectados.agregar(usuario);
    // votes(cliente,io);
};
exports.conectarCliente = conectarCliente;
const desconectar = (cliente, io) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
        exports.usuariosConectados.borrarUsuario(cliente.id);
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
    });
};
exports.desconectar = desconectar;
// Escuchar mensajes
const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
// Configurar usuario
const configurarUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        exports.usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        });
    });
};
exports.configurarUsuario = configurarUsuario;
// Obtener Usuarios
const obtenerUsuarios = (cliente, io) => {
    cliente.on('obtener-usuarios', () => {
        io.to(cliente.id).emit('usuarios-activos', exports.usuariosConectados.getLista());
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
/**
 * Votes section
 *
 */
const emitAnswer = (io) => {
    io.emit('answers', exports.question);
};
exports.emitAnswer = emitAnswer;
//Emit votes, receive votes 
function votes(cliente, io) {
    cliente.on('votes', (payload) => {
        var _a;
        if (!payload.answer.length) {
            (0, exports.emitAnswer)(io);
            return;
        }
        if (!((_a = exports.usuariosConectados.getUsuario(cliente.id)) === null || _a === void 0 ? void 0 : _a.yaVoto)) {
            exports.usuariosConectados.votar(cliente.id, payload.answer);
            payload.answer === 'yes'
                ? exports.question.yesNumber++
                : exports.question.nosNumber++;
        }
        (0, exports.emitAnswer)(io);
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
    });
}
exports.votes = votes;
//Rename a question title
function questions(cliente, io) {
    cliente.on('questions', (payload, callback) => {
        if (!payload.title) {
            console.log('no hay title');
            if (callback) {
                callback({ ok: false });
            }
            (0, exports.emitAnswer)(io);
            return;
        }
        console.log('si hhay title');
        exports.question.title = payload.title;
        exports.question.nosNumber = 0;
        exports.question.yesNumber = 0;
        exports.usuariosConectados.nullVotes();
        // console.log(question.title);
        (0, exports.emitAnswer)(io);
        if (callback) {
            callback({ ok: true });
        }
    });
}
exports.questions = questions;
