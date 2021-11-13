import { configuracionMail } from "../../../src/configEmail.js"
import EnviadorDeMails from "./EnviadorDeMail.js";

const enviador = new EnviadorDeMails(configuracionMail)

export function getConfig() {
    return  enviador
}