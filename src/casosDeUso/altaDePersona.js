import Persona, { toDTO } from '../modelos/Persona.js'

async function crearPersona(daoPersonas, nombre, edad, rol) {
    const id = Persona.nextId()
    const persona = new Persona(id, nombre, edad, rol)
    await daoPersonas.guardar(toDTO(persona))
    return persona
}

export { crearPersona }