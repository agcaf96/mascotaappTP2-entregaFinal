import Persona, { toDTO } from '../modelos/Persona.js'
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js'
import { confirmarRegistro } from './confirmarMailAlta.js';

const daoPersonas = getDaoPersonas();

async function crearPersona(nombre, edad, rol, mascotas = [], email) {
    try {
        const id = await daoPersonas.contarPersonas()
        const idF = id + 1
        const persona = new Persona(idF, nombre, edad, rol, mascotas, email)
        await daoPersonas.guardar(toDTO(persona))
        confirmarRegistro(persona.id)
        return persona

    } catch (error) {
        throw error
    }

}

export { crearPersona }