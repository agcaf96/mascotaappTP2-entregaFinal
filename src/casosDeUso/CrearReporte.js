import { getReporteExcelBuilder } from '../Modulos/reporteBuilder/index.js'
import { getReporteDeMascotas } from '../Modulos/ReporteMascotas/index.js'

const misMascotas = new getReporteDeMascotas();
const builderExcel = new getReporteExcelBuilder();


async function crearReporte(mascos, nombrePlanilla, outputPath) {
    if(mascos.length==0){
        throw new Error("No hay mascotas")
    }

    try {
        await misMascotas.build(builderExcel, nombrePlanilla, mascos, outputPath)    
    } catch (error) {
        throw error
    }
    
}

export { crearReporte }