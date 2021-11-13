import { getDaoMascotas } from '../src/daos/DaoFactoryMascotas.js'
import { getDaoPersonas } from '../src/daos/DaoFactoryPersonas.js'

const daoMascotas = getDaoMascotas();
const daoPersonas = getDaoPersonas();

async function buscarMascotasporUsuario(idPersona) {
    const Persona = daoPersona.buscar(idPersona)
    const masco = []
    for (let index = 0; index < Persona.mascotas.length; index++) {
        masco.push(await daoMascota.buscar(Persona.mascotas[index]))
    }
    console.log(masco.length)
    return masco
}

export { buscarMascotasporUsuario}