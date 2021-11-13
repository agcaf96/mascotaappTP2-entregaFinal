import { getLocalizador } from '../servicios/modulos/localizador/index.js'
import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'

const l = getLocalizador()
const daoMascotas = getDaoMascotas()

async function verDireDeListaMascotas(mascotas) {

    const arrayDire = []

    for (const idMascota of mascotas) {
        const mascotaBuscada = await daoMascotas.buscar(idMascota)
        let ubicacionx = mascotaBuscada.ubicacion
        const direccion = await l.convertirLatADire(ubicacionx)
        arrayDire.push({nombre: mascotaBuscada.nombre, direccion: direccion})
    }   
return arrayDire
}

export { verDireDeListaMascotas }