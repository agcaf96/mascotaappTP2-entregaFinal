import { fromDTO, toDTO } from '../modelos/Mascota.js'
import { getLocalizador } from '../modulos/localizador/index.js'
import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'

const l = getLocalizador()

const daoMascotas = getDaoMascotas()

async function asociarUbicacion(idMascota, direccion) {

    try {
        const res = await l.convertirDireALat(direccion)
        console.log("res",res)
        const mascotaBuscada = await daoMascotas.buscar(idMascota)
        const mo = fromDTO(mascotaBuscada)
        mo.asociarUbicacion(res)
        await daoMascotas.guardar(toDTO(mo))
        return mo
    } catch (error) {
        throw error
    }

}

export {asociarUbicacion}