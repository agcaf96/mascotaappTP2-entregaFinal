import { getDaoMascotas } from '../daos/DaoFactoryMascotas.js'
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js'

const daoMascotas = getDaoMascotas();
const daoPersonas = getDaoPersonas();

async function buscarMascotasporUsuario(idPersona) {
    const Persona = await daoPersonas.buscar(idPersona)
    const masco = []
    for (let index = 0; index < Persona.mascotas.length; index++) {
        masco.push(await daoMascotas.buscar(Persona.mascotas[index]))
    }
    console.log(masco.length)
    return masco
}

export { buscarMascotasporUsuario}