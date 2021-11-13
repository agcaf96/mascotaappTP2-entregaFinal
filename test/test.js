import { crearMascota } from '../src/casosDeUso/altaDeMascota.js'
import { crearPersona } from '../src/casosDeUso/altaDePersona.js'
import { Roles } from '../src/modelos/Roles.js'
import { asociarFotoAMascota } from '../src/casosDeUso/agregoImagenMascota.js';



try {
     const persona1 = await crearPersona( "mar", 35, Roles.Administrador)
    let mascota1 = await crearMascota("pelusa", 2, "perro", "negro", "hembra", persona1)
    
    console.log("mascota sin foto: ", mascota1)

    mascota1 = await asociarFotoAMascota(mascota1.id, `/assets/recibidas/${mascota1.id}.jpg`)

    console.log("mascota con foto: ", mascota1);
} catch (error) {
    console.log(error)
}

console.log('termine')