import {createFileExtractorMiddleware} from "./recibeFoto.js";
import { direccionFotos } from "../../config.js";

const funcionM = new createFileExtractorMiddleware(direccionFotos)

export function getCreateFileExtractor(){
    return funcionM
}