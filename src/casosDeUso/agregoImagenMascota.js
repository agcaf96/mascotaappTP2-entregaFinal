import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'

const mascotaDao = getDaoMascotas()

export async function asociarFotoAMascota(idMascota, rutaImagen) {

    let mascotaBuscada = await mascotaDao.buscar(idMascota)    
    mascotaBuscada.imagen = rutaImagen
    mascotaDao.guardar(mascotaBuscada)
    return mascotaBuscada;
}