import { fromDTO, toDTO } from '../modelos/Mascota.js'
import FactoryLocalizador from '../modulos/localizador/factoryLocalizador.js'
import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'

const f = new FactoryLocalizador()

const l = f.getLocalizador()

const daoMascotas = getDaoMascotas()

async function asociarUbicacion(idMascota, direccion) {
    console.log(direccion)
    const res = await l.convertirDireALat(direccion)
    const mascotaBuscada = await daoMascotas.buscar(idMascota)
    const mo = fromDTO(mascotaBuscada)
    mo.asociarUbicacion(res)
    await daoMascotas.guardar(toDTO(mo))
    return mascotaBuscada
}

export {asociarUbicacion}