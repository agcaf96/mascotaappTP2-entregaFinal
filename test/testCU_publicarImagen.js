import { getDaoMascotas } from '../src/daos/DaoFactoryMascotas.js'
import { asociarFotoAMascota } from '../src/casosDeUso/agregoImagenMascota.js';

const daoMascotas = getDaoMascotas()

try {
    const mascota1 = await daoMascotas.buscar(1)

    console.log("mascota sin foto: ", mascota1)

    await asociarFotoAMascota(mascota1.id, `/assets/recibidas/${mascota1.id}.jpg`)

    console.log("mascota con foto: ", await daoMascotas.buscar(mascota1.id));

} catch (error) {
    console.log(error)
}

console.log('termine')