import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'


export async function asociarFotoAMascota(idMascota, rutaImagen) {
    const mascotaDao = getDaoMascotas()
    let mascotaBuscada = await mascotaDao.buscar(idMascota)    
    mascotaBuscada.imagen = rutaImagen
    mascotaDao.guardar(mascotaBuscada)
}