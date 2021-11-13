import {createFileExtractorMiddleware} from "./recibeFoto.js";
import { direccionFotos } from "../../config.js";

const middlw = new createFileExtractorMiddleware(direccionFotos)

export function getCreateFileExtractor(){
    return middlw
}