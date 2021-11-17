import { getReporteExcelBuilder } from '../Modulos/reporteBuilder/index.js'
import { getReporteDeMascotas } from '../Modulos/ReporteMascotas/index.js'
import { buscarMascotasporUsuario } from '../casosDeUso/buscarMascotasPorUsuario.js'

const misMascotas = new getReporteDeMascotas();
const builderExcel = new getReporteExcelBuilder();


async function crearReporte(idUsuario, nombrePlanilla, outputPath) {

    const mascos = await buscarMascotasporUsuario(idUsuario)
    await misMascotas.build(builderExcel, nombrePlanilla, mascos, outputPath)
     
}

export { crearReporte }