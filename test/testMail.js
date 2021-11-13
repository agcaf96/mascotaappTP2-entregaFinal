import EnviadorDeMails from "../src/modelos/EnviadorDeMail.js"
import Email from "../src/modelos/Email.js"

const configuracionMail = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'eva.bartell4@ethereal.email',
        pass: 'F3f2TsvKekZ33QxaUT'
    }
}

const envioMail = new EnviadorDeMails(configuracionMail)

const email = new Email("florsoria@mail.com","Felicitaciones!","Ganaste mucha plata!")

try {
    await envioMail.enviar(email)
    console.log("Envio exitoso")
} catch(error){
    console.log("No pudimos enviar el mail: " + error)
}

