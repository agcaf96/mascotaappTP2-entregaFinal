import Persona, { fromDTO, toDTO } from '../modelos/Persona.js'
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js'

const daoPersona = getDaoPersonas();

async function asociarMascota(mascota, persona) {
    const p = await daoPersona.buscar(persona.id)
    const p2 = await(fromDTO(p))

    p2.asignarMascota(mascota.id)
    await daoPersona.guardar(toDTO(p2))
    
}

export {asociarMascota}