import {getReporteExcelBuilder} from '../Modulos/reporteBuilder/index.js'
import {getReporteDeMascotas} from '../Modulos/ReporteMascotas/index.js'


async function crearReporte(mascos, nombrePlanilla, outputPath) {

    const misMascotas = new getReporteDeMascotas();
    const builderExcel = new getReporteExcelBuilder();

    await misMascotas.build(builderExcel, nombrePlanilla, mascos, outputPath)

}

export { crearReporte }