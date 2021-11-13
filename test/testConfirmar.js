import { getDaoPersonas } from '../src/daos/DaoFactoryPersonas.js'
import { confirmarRegistro } from "../src/casosDeUso/confirmarMailAlta.js"
import { Roles } from '../src/modelos/Roles.js'
import { crearPersona } from '../src/casosDeUso/altaDePersona.js'

const usuario = getDaoPersonas()

const p = await crearPersona("flor", 25, Roles.Administrador, "thalia.langosh57@ethereal.email")

usuario.guardar(p)

try {
    confirmarRegistro(p.id)
    console.log("envio exitoso")
} catch (error) {
    console.log("No se pudo enviar el error porque:" , error)
}






