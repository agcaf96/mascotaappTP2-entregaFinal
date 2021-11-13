import { Router } from 'express'
import { crearMascota } from '../casosDeUso/altaDeMascota.js'


const mascotasRouter = Router()



mascotasRouter.post('/', async (req, res) => {
    try {
        console.log(req.body.color)
        console.log(req.body)
        //console.log(req.body.color)
        const mascota = await crearMascota(req.body.nombre, req.body.edad, req.body.especie, req.body.color, req.body.sexo, req.body.idPersona)
        //res.sendStatus(201)
        res.json(mascota)

    } catch (error) {
        res.json({ error: error.message })
    }




})

export { mascotasRouter }