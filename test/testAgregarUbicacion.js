import { asociarUbicacion}  from '../src/casosDeUso/asociarUbicacionAMascota.js'
import { getDaoMascotas } from '../src/daos/DaoFactoryMascotas.js'

const daoMascotas = getDaoMascotas()

try {
    const direccionDeOrigen = "Yatay 240, Almagro, Capital Federal, Argentina"
    await asociarUbicacion( 1, direccionDeOrigen)

    const direccionDeOrigen2 = "Yatay 440, Almagro, Capital Federal, Argentina"
    await asociarUbicacion( 2, direccionDeOrigen2)
    
    const direccionDeOrigen3 = "Yatay 640, Almagro, Capital Federal, Argentina"
    await asociarUbicacion( 3, direccionDeOrigen3)

    const m = await daoMascotas.buscar(1)
    const m2 = await daoMascotas.buscar(2)
    const m3 = await daoMascotas.buscar(3)

    console.log(m)
} catch (error) {
    console.log(error)
}