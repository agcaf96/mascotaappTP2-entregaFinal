import ReporteEnExcelBuilder from '../Modulos/reporteBuilder/ReporteEnExcelBuilder.js'
import ReporteDeMascotas from '../Modulos/reporteBuilder/ReporteDeMascotas.js'


async function crearReporte(mascos, nombrePlanilla, outputPath) {

    const misMascotas = new ReporteDeMascotas();
    const builderExcel = new ReporteEnExcelBuilder();

    await misMascotas.build(builderExcel, nombrePlanilla, mascos, outputPath)

}

export { crearReporte }