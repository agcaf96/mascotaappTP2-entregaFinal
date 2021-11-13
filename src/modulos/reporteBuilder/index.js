import ReporteEnExcelBuilder from "./ReporteEnExcelBuilder.js";

const creadorReporte = new ReporteEnExcelBuilder()

export function getReporteExcelBuilder(){
    return creadorReporte
}