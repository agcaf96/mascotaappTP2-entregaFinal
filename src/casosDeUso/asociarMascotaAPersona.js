import { fromDTO, toDTO } from '../modelos/Persona.js'
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js'
import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'

const daoPersona = getDaoPersonas();
const daoMascota = getDaoMascotas();

async function asociarMascota(idmascota, idPersona) {
    try {
        const p = await daoPersona.buscar(idPersona)
        const m = await daoMascota.buscar(idmascota)
        const p2 = await(fromDTO(p))
        p2.asignarMascota(idmascota)
        await daoPersona.guardar(toDTO(p2))
    } catch (error) {
        throw error
    }
}

export {asociarMascota}