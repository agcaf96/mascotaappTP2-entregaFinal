import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'
import  { fromDTO, toDTO }  from '../modelos/Mascota.js'

const daoMascotas = getDaoMascotas()
export async function asociarFotoAMascota(idMascota, rutaImagen) {
        const mascotaBuscada = await daoMascotas.buscar(idMascota)   
        const mascotaF = (fromDTO(mascotaBuscada))
        mascotaF.agregarImagen(rutaImagen)
        await daoMascotas.guardar(toDTO(mascotaF))
        return mascotaF;
}