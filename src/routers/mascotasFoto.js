import { Router } from 'express'
import { cargarFoto } from '../casosDeUso/agregoImagenMascota.js'
import { createFileExtractorMiddleware } from '../modulos/recepcionDeFotos/recibeFoto.js'

const mascotasRouter = Router()

const getFile = createFileExtractorMiddleware('./assets/recibidas')

mascotasRouter.post('/', getFile, async (req, res) => {
    try {
        const mascota = await cargarFoto({ ...req.body, rutaImagen: req.results.filenames[ 0 ] })
        res.json(mascota)
    } catch (error) {
        res.json({ error: error.message })
    }
})

export { mascotasRouter }