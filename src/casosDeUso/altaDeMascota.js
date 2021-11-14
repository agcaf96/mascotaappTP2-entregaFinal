import Mascota, { toDTO } from '../modelos/Mascota.js'
import { asociarMascota } from './asociarMascotaAPersona.js'
import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'


const daoMascotas = getDaoMascotas()

async function crearMascota(nombre, edad, especie, color, sexo, idPersona) {
 try {
    const id = await daoMascotas.contarMascotas()
    const idF = id+1 
    const mascota = new Mascota(idF, nombre, edad, especie, color, sexo)
    await daoMascotas.guardar(toDTO(mascota))
    await asociarMascota(mascota.id, idPersona)
    return mascota
 } catch (error) {
     throw error
 }   
}

export { crearMascota }