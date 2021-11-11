import Router from  'express';
import { createFileExtractorMiddleware } from '../modulos/recepcionDeFotos/recibeFoto.js'
import { asociarFotoAMascota } from '../casosDeUso/agregoImagenMascota.js';

const publicadorDeImagen = Router()

const direccion = createFileExtractorMiddleware('./assets/recibidas')

     publicadorDeImagen.post('/',direccion, async (req, res) => {
        try {
            console.log(req.body);
            //cart to number
            const idMascota = +req.body.idMascota
            await asociarFotoAMascota(idMascota, `/assets/recibidas/${idMascota}.jpg`) 
            res.json( "Foto subida OK" )
        } catch (error) {
            res.json({ error: error.message })
        }

        })

    

export {publicadorDeImagen};