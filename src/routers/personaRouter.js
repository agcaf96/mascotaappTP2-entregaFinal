import { Router } from 'express'
import { crearPersona } from '../casosDeUso/altaDePersona.js'


const personasRouter = Router()



personasRouter.post('/', async (req, res) => {
    try {
        const datosPersona = req.body
        const persona = await crearPersona(req.body.nombre, req.body.edad, req.body.rol)
        res.json(persona)

    } catch (error) {
        res.json({ error: error.message })
    }
})

export { personasRouter }