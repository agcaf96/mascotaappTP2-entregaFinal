import { Router } from 'express'
import { crearMascota } from '../casosDeUso/altaDeMascota.js'
import { asociarUbicacion } from '../casosDeUso/asociarUbicacionAMascota.js'

const mascotasRouter = Router()

mascotasRouter.post('/', async (req, res) => {
    try {
        const mascota = await crearMascota(req.body.nombre, req.body.edad, req.body.especie, req.body.color, req.body.sexo, req.body.idPersona)
        res.json(mascota)

    } catch (error) {
        res.status(400)
        res.json({ error: error.message })
    }
})

mascotasRouter.put('/agregarUbicacion', async (req, res) => {
    try {
        const mascota = await asociarUbicacion(req.body.idMascota, req.body.direccion)
        res.json(mascota)

    } catch (error) {
        res.status(400)
        res.json({ error: error.message })
    }
})

export { mascotasRouter }