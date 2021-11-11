import Mascota, { toDTO } from '../modelos/Mascota.js'
import { asociarMascota } from './asociarMascotaAPersona.js'


async function crearMascota(daoMascotas, daoPersona, nombre, edad, especie, color, sexo, Persona) {
    const id = Mascota.nextId()
    const mascota = new Mascota(id, nombre, edad, especie, color, sexo)
    await daoMascotas.guardar(toDTO(mascota))
    await asociarMascota(daoPersona, mascota, Persona)
    return mascota
}

export { crearMascota }