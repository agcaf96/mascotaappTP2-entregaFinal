import { fromDTO, toDTO } from '../modelos/Mascota.js'

import FactoryLocalizador from '../servicios/modulos/factoryLocalizador.js'

const f = new FactoryLocalizador()

const l = f.getLocalizador()

import { getDaoMascotas } from '../src/daos/DaoFactoryMascotas.js'
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