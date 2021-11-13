import { Router } from 'express'
import { crearPersona } from '../casosDeUso/altaDePersona.js'
import { asociarMascota } from '../casosDeUso/asociarMascotaAPersona.js'
import {buscarMascotasporUsuario} from '../casosDeUso/buscarMascotasPorUsuario.js'
import {confirmarRegistro} from '../casosDeUso/confirmarMailAlta.js'

const personasRouter = Router()



personasRouter.post('/', async (req, res) => {
    try {

        const persona = await crearPersona(req.body.nombre, req.body.edad, req.body.rol)
        res.json(persona)

    } catch (error) {
        res.json({ error: error.message })
    }
})

personasRouter.put('/agregarMascota', async (req, res) => {
    try {

        await asociarMascota(req.body.idmascota, req.body.idPersona)
        res.json("se asocio ok")

    } catch (error) {
        res.json({ error: error.message })
    }
})

personasRouter.get('/buscarMascotas', async (req, res) => {
    try {
        const mascotas = await buscarMascotasporUsuario(req.body.idPersona)
        res.json(mascotas)
    } catch (error) {
        res.json({ error: error.message })
    }
})

personasRouter.post('/confirmarMail', async (req, res) => {
    try {
        confirmarRegistro(req.body.idPersona)
        res.json("confirmacion ok")

    } catch (error) {
        res.json({ error: error.message })
    }
})

export { personasRouter }