import Mascota, { toDTO } from '../modelos/Mascota.js'
import { asociarMascota } from './asociarMascotaAPersona.js'
import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'

const daoMascotas = getDaoMascotas()


async function crearMascota(nombre, edad, especie, color, sexo, Persona) {
    const id = Mascota.nextId()
    const mascota = new Mascota(id, nombre, edad, especie, color, sexo)
    await daoMascotas.guardar(toDTO(mascota))
    await asociarMascota(mascota, Persona)
    return mascota
}

export { crearMascota }