import Mascota, { toDTO } from '../modelos/Mascota.js'
import { asociarMascota } from './asociarMascotaAPersona.js'
import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js'

const daoMascotas = getDaoMascotas()
const daoPersonas = getDaoPersonas()


async function crearMascota(nombre, edad, especie, color, sexo, idPersona) {
    const id = Mascota.nextId()
    const mascota = new Mascota(id, nombre, edad, especie, color, sexo)
    await daoMascotas.guardar(toDTO(mascota))
    await asociarMascota(mascota, idPersona)
    return mascota
}

export { crearMascota }