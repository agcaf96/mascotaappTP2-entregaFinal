import Email from "../modelos/Email.js";
import { getDaoPersonas } from '../daos/DaoFactoryPersonas.js';
import { getEnviadorDeMails } from "../modulos/confirmacionEmail/index.js";

const daoPersonas = getDaoPersonas() 
const env = getEnviadorDeMails()

async function confirmarRegistro(idPersona){

    const texto = "Registro Exitoso!"
    const asunto = "Confirmacion"
    //Validar que exista la persona
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
