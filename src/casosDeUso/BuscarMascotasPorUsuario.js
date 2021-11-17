import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js'

const daoMascotas = getDaoMascotas();
const daoPersonas = getDaoPersonas();

async function buscarMascotasporUsuario(idPersona) {

    const persona = await daoPersonas.buscar(idPersona)
    const masco = []
    for (let index = 0; index < persona.mascotas.length; index++) {
        masco.push(await daoMascotas.buscar(persona.mascotas[index]))
    }

    return masco



}

export { buscarMascotasporUsuario }