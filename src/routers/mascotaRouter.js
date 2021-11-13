import { Router } from 'express'
import { crearMascota } from '../casosDeUso/altaDeMascota.js'


const mascotasRouter = Router()



mascotasRouter.post('/', async (req, res) => {
    try {
        const datosMascota = req.body
        const mascota = await crearMascota(req.body.nombre, req.body.edad, req.body.especie, req.body.color, req.body.sexo, req.body.idPersona)
        res.json(mascota)

    } catch (error) {
        res.json({ error: error.message })
    }




})

export { mascotasRouter }