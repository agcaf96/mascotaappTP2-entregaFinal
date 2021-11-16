import Router from 'express';
import fs from 'fs'
import { getCreateFileExtractor } from '../modulos/recepcionDeFotos/index.js'
import { asociarFotoAMascota } from '../casosDeUso/agregoImagenMascota.js';

const publicadorDeImagen = Router()

const direccion = getCreateFileExtractor()

publicadorDeImagen.post('/', direccion, async (req, res) => {
    try {
        console.log(req.body);
        //cart to number
        const idMascota = +req.body.idMascota
        await asociarFotoAMascota(idMascota, `/assets/recibidas/${idMascota}.jpg`)
        res.json("foto subida OK")
    } catch (error) {
        res.status(400)
        res.json({ error: error.message })
        const idMascotaCatch = +req.body.idMascota
        const path = `./assets/recibidas/${idMascotaCatch}.jpg`
        fs.unlinkSync(path)
        
    }

})

export { publicadorDeImagen };