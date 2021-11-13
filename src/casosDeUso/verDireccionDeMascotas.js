import FactoryLocalizador from '../servicios/modulos/factoryLocalizador.js'

const f = new FactoryLocalizador()
const l = f.getLocalizador()


import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'

async function verDireDeListaMascotas(mascotas) {

    const arrayDire = []
    const daoMascotas = getDaoMascotas()

    for (const idMascota of mascotas) {
        const mascotaBuscada = await daoMascotas.buscar(idMascota)
        let ubicacionx = mascotaBuscada.ubicacion
        const direccion = await l.convertirLatADire(ubicacionx)
        arrayDire.push({nombre: mascotaBuscada.nombre, direccion: direccion})
    }   
return arrayDire
}

export { verDireDeListaMascotas }