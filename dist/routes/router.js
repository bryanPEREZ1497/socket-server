"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = __importDefault(require("../classes/server"));
const socket_1 = require("../sockets/socket");
const grafica_1 = require("../classes/grafica");
const router = (0, express_1.Router)();
const grafica = grafica_1.GraficaData.instance;
router.get('/grafica', (req, res) => {
    res.json(grafica.getDataGrafica());
});
router.post('/grafica', (req, res, next) => {
    const server = server_1.default.instance;
    const usuario = socket_1.usuariosConectados.getUsuarioPorNombre(req.body.login.nombre);
    console.log(socket_1.usuariosConectados);
    if (usuario === null || usuario === void 0 ? void 0 : usuario.yaVoto) {
        res.status(400)
            .json({
            ok: false,
            mensaje: 'Ya votaste'
        });
    }
    else {
        const opcion = Number(req.body.opcion);
        const unidades = Number(req.body.unidades);
        grafica.incrementarValor(opcion, unidades);
        server.io.emit('cambio-grafica', grafica.getDataGrafica());
        res.json(grafica.getDataGrafica());
    }
});
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const payload = { cuerpo, de };
    const server = server_1.default.instance;
    server.io.emit('mensaje-nuevo', payload);
    res.json({
        ok: true,
        cuerpo,
        de
    });
});
router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const payload = {
        de,
        cuerpo
    };
    const server = server_1.default.instance;
    server.io.in(id).emit('mensaje-privado', payload);
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});
// Servicio para obtener todos los IDs de los usuarios
router.get('/usuarios', (req, res) => {
    const server = server_1.default.instance;
    server.io.allSockets()
        .then((clientes) => {
        res.json({
            ok: true,
            clientes: Array.from(clientes)
        });
    })
        .catch(err => {
        res.json({
            ok: false,
            err,
        });
    });
});
// Obtener usuarios y sus nombres
router.get('/usuarios/detalle', (req, res) => {
    res.json({
        ok: true,
        clientes: socket_1.usuariosConectados.getLista()
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map