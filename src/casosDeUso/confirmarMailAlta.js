import Email from "../modelos/Email.js";
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js';
import { getEnviadorDeMails } from "../modulos/confirmacionEmail/index.js";

const daoPersonas = getDaoPersonas()
const env = getEnviadorDeMails()

async function confirmarRegistro(idPersona) {

    const texto = "Registro Exitoso!"
    const asunto = "Confirmacion"

    const persona = await daoPersonas.buscar(idPersona)
    const destinatario = persona.email
    const email = new Email(destinatario, asunto, texto)
    await env.enviar(email)

}

export { confirmarRegistro }
