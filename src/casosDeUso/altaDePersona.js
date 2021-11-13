import Persona, { toDTO } from '../modelos/Persona.js'
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js'

const daoPersonas = getDaoPersonas();

async function crearPersona(nombre, edad, rol, email) {
    const id = Persona.nextId()
    const persona = new Persona(id, nombre, edad, rol, email)
    
    await daoPersonas.guardar(toDTO(persona))
    return persona
}

export { crearPersona }