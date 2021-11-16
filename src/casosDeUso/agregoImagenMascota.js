import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'
import  { fromDTO, toDTO }  from '../modelos/Mascota.js'

const daoMascotas = getDaoMascotas()
export async function asociarFotoAMascota(idMascota, rutaImagen) {
    try {
        let mascotaBuscada = await daoMascotas.buscar(idMascota)    
        const mascotaF = await(fromDTO(mascotaBuscada))
        mascotaF.agregarImagen(rutaImagen)

        await daoMascotas.guardar(toDTO(mascotaF))
        return mascotaF;
    } catch (error) {
        throw error
    }

}