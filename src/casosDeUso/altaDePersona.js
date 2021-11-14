import Persona, { toDTO } from '../modelos/Persona.js'
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js'

const daoPersonas = getDaoPersonas();

async function crearPersona(nombre, edad, rol,mascotas=[], email) {
    try {
        const id = await daoPersonas.contarPersonas()
        const idF = id + 1
        const persona = new Persona(idF, nombre, edad, rol,mascotas, email)

        await daoPersonas.guardar(toDTO(persona))
        return persona

    } catch (error) {
        console.log(error.message)
        throw error
    }

}

export { crearPersona }