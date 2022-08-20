
import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { usuariosConectados } from '../sockets/socket';
import { GraficaData } from '../classes/grafica';

const router = Router();
const grafica = GraficaData.instance;

router.get('/grafica', (req: Request, res: Response) => {
    res.json(grafica.getDataGrafica());
});

router.post('/grafica', (req: Request, res: Response, next) => {
    const server = Server.instance;
    const usuario = usuariosConectados.getUsuarioPorNombre(req.body.login.nombre);
    console.log(usuariosConectados)
    if (usuario?.yaVoto) {
        res.status(400)
            .json({
                ok: false,
                mensaje: 'Ya votaste'
            });
    } else {
        const opcion = Number(req.body.opcion);
        const unidades = Number(req.body.unidades);
        grafica.incrementarValor(opcion, unidades);
        server.io.emit('cambio-grafica', grafica.getDataGrafica());
        res.json(grafica.getDataGrafica());
    }

});

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });
});

router.post('/mensajes', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const payload = { cuerpo, de };
    const server = Server.instance;
    server.io.emit('mensaje-nuevo', payload);
    res.json({
        ok: true,
        cuerpo,
        de
    });
});


router.post('/mensajes/:id', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const payload = {
        de,
        cuerpo
    }
    const server = Server.instance;
    server.io.in(id).emit('mensaje-privado', payload);
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });

});

// Servicio para obtener todos los IDs de los usuarios
router.get('/usuarios', (req: Request, res: Response) => {

    const server = Server.instance;

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
router.get('/usuarios/detalle', (req: Request, res: Response) => {
    res.json({
        ok: true,
        clientes: usuariosConectados.getLista()
    });
});


export default router;



