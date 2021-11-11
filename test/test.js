import { crearMascota } from '../src/casosDeUso/altaDeMascota.js'
import { getDaoMascotas } from '../src/daos/DaoFactoryMascotas.js'
import { crearPersona } from '../src/casosDeUso/altaDePersona.js'
import { Roles } from '../src/modelos/Roles.js'
import { getDaoPersonas } from '../src/daos/DaoFactoryPersonas.js'
import { asociarFotoAMascota } from '../src/casosDeUso/agregoImagenMascota.js';

const daoMascotas = getDaoMascotas()
const daoPersonas = getDaoPersonas()

try {
     const persona1 = await crearPersona(daoPersonas, "mar", 35, Roles.Administrador)
    const mascota1 = await crearMascota(daoMascotas, daoPersonas, "pelusa", 2, "perro", "negro", "hembra", persona1)
    
    console.log("mascota sin foto: ", mascota1)

    await asociarFotoAMascota(mascota1.id, `/assets/recibidas/${mascota1.id}.jpg`)

    console.log("mascota con foto: ", await daoMascotas.buscar(mascota1.id));
} catch (error) {
    console.log(error)
}

console.log('termine')