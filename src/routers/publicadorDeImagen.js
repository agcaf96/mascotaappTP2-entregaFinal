import Router from 'express';
import fs from 'fs'
import { getCreateFileExtractor } from '../modulos/recepcionDeFotos/index.js'
import { asociarFotoAMascota } from '../casosDeUso/agregoImagenMascota.js';

const publicadorDeImagen = Router()

const direccion = getCreateFileExtractor()

publicadorDeImagen.post('/', direccion, async (req, res) => {
    try {
        if (req.files == null) {
            throw new Error("No mandaste fotito")
        }
        //cart to number
        const idMas = +req.body.id
        await asociarFotoAMascota(idMas, `/assets/recibidas/${idMas}.jpg`)
        res.json("foto subida OK")
    } catch (error) {
        res.status(400)
        res.json({ error: error.message })
        const idMascotaCatch = +req.body.id
        if (error.message == "DB_ERROR: Mascota no encontrada") {
            const path = `./assets/recibidas/${idMascotaCatch}.jpg`
            fs.unlinkSync(path)
        }
    }

})

export { publicadorDeImagen };