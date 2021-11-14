import { getLocalizador } from '../modulos/localizador/index.js'
import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'

const l = getLocalizador()
const daoMascotas = getDaoMascotas()

async function verDireDeListaMascotas(mascotas) {
    if (mascotas.length == 0) {
        throw new Error("No hay mascotas")
    }
    try {
        const arrayDire = []
     
        for (const idMascota of mascotas) {
            const mascotaBuscada = await daoMascotas.buscar(idMascota)
            let ubicacionx = mascotaBuscada.ubicacion
            console.log(ubicacionx)


            if (ubicacionx.hasOwnProperty("lat")) {
                const direccion = await l.convertirLatADire(ubicacionx)
                arrayDire.push({ nombre: mascotaBuscada.nombre, direccion: direccion })
            }
        }
        return arrayDire

    } catch (error) {
        throw error
    }

}

export { verDireDeListaMascotas }