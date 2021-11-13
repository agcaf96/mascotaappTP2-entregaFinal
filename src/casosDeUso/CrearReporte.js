import { getReporteExcelBuilder } from '../Modulos/reporteBuilder/index.js'
import { getReporteDeMascotas } from '../Modulos/ReporteMascotas/index.js'

const misMascotas = new getReporteDeMascotas();
const builderExcel = new getReporteExcelBuilder();


async function crearReporte(mascos, nombrePlanilla, outputPath) {
    await misMascotas.build(builderExcel, nombrePlanilla, mascos, outputPath)
}

export { crearReporte }