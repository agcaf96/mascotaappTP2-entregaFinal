import { getDaoPersonas } from '../src/daos/DaoFactoryPersonas.js'
import { confirmarRegistro } from "../src/casosDeUso/confirmarMailAlta.js"

const usuario = getDaoPersonas()

usuario.buscar(2)

try {
    confirmarRegistro(p.id)
    console.log("envio exitoso")
} catch (error) {
    console.log("No se pudo enviar el error porque:" , error)
}






