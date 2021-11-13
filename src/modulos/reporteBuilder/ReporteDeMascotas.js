const TITULOS = ['ID','NOMBRE', 'EDAD', 'ESPECIE','COLOR', 'SEXO',  'ESTADO','FOTO','UBICACIÓN'];

const TITULOS_DESDE_FILA = 1;
const TITULOS_DESDE_COL = 1;

const MASCOTAS_DESDE_FILA = 2;
const MASCOTAS_DESDE_COL = 1;





class ReporteDeMascotas {

    inicializar(builder, nombreReporte) {
        builder.crearPagina(nombreReporte);
    }
    escribirTitulos(builder, nombreReporte) {
        builder.escribirEnFila(nombreReporte, TITULOS_DESDE_FILA, TITULOS_DESDE_COL, TITULOS);
    }
    escribirMascotas(builder, nombreReporte, mascotas) {
        for (let i = 0; i < mascotas.length; i++) {
            builder.escribirEnFilaObjeto(nombreReporte, MASCOTAS_DESDE_FILA + i, MASCOTAS_DESDE_COL, mascotas[i])
        }
    }

    async build(
        builder, nombreReporte, mascotas, outputPath
    ) {
        this.inicializar(builder, nombreReporte);
        this.escribirTitulos(builder, nombreReporte);
        this.escribirMascotas(builder, nombreReporte, mascotas);

        return await builder.guardarArchivo(outputPath);
    }




}
export default ReporteDeMascotas;