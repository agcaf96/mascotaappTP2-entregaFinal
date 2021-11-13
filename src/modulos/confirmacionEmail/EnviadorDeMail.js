import nodemailer from 'nodemailer';

class EnviadorDeMails {
    constructor(configuracionEthernal){
        this.transporter = nodemailer.createTransport(configuracionEthernal)
    }

    async enviar(email){
        try {
            await this.transporter.sendMail(email)
        } catch(error) {
            throw new Error(error.message)
        }
    }
   }

export default EnviadorDeMails;