
//import { crearMascota } from '../src/casosDeUso/altaDeMascota.js'
import { getDaoMascotas } from '../src/daos/DaoFactoryMascotas.js'
//import { crearPersona } from '../src/casosDeUso/altaDePersona.js'
//import { Roles } from '../src/modelos/Roles.js'
import { getDaoPersonas } from '../src/daos/DaoFactoryPersonas.js'
import { crearReporte } from '../src/casosDeUso/CrearReporte.js'
import { buscarMascotasporUsuario } from '../src/casosDeUso/buscarMascotasPorUsuario.js'


const daoMascotas = getDaoMascotas()

const daoPersonas = getDaoPersonas()

try {
    // const persona1 = await crearPersona("mar", 35, Roles.Adoptante)
    // console.log(persona1, persona2, persona3)

    // const mascota1 = await crearMascota("pelusa", 2, "perro", "negro", "hembra", persona2.id)
    // const persona1a = await daoPersonas.buscar(persona2.id)

    // const mascota2 = await crearMascota("pompon", 5, "gato", "gris", "macho", persona1a.id)
    // const persona1b = await daoPersonas.buscar(persona1a.id)
    // const mascota3 = await crearMascota("bellota", 1, "perro", "blanco", "hembra", persona1b.id)
    // console.log(mascota1, mascota2, mascota3)
    // console.log(persona1, persona2, persona3)


    // const persona1c = await daoPersonas.buscar(persona1b.id)
   // const mascotas = await buscarMascotasporUsuario( 2)
    //console.log(mascotas);
    
    await crearReporte(2, 'persona2', 'reporte2')
    

} catch (error) {
    console.log(error.message)
}





console.log('termine')