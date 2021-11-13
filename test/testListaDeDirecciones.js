import {verDireDeListaMascotas} from '../src/casosDeUso/verDireccionDeMascotas.js'

try {
    const mascotas = [1,2,3]
    const dire = await verDireDeListaMascotas( mascotas)
    console.log("Dirección convertida ",dire)
} catch (error) {
    console.log(error)
}