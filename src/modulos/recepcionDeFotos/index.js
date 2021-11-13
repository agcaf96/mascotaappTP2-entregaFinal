import {createFileExtractorMiddleware} from "./recibeFoto.js";

const middlw = new createFileExtractorMiddleware(filepath)

export function getCreateFileExtractor(){
    return middlw
}