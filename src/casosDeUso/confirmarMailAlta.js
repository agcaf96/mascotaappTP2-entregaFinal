import Email from "../modelos/Email.js";
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js';
import { getConfig } from "../modelos/index.js";

const daoPersonas = getDaoPersonas() 
const env = getConfig()

async function confirmarRegistro(idPersona){

    const texto = "Registro Exitoso!"
    const asunto = "Confirmacion"

    const persona = await daoPersonas.buscar(idPersona)
    const destinatario = persona.email
    console.log(destinatario)

    const email = new Email(destinatario, asunto, texto)

    try {
        await env.enviar(email)
    } catch(error){
        throw new Error()
    }

}

export {confirmarRegistro}
