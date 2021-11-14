import ExcelJS from 'exceljs';


class ReporteEnExcelBuilder {

    constructor() {
        this.workbook = new ExcelJS.Workbook();
    }


    crearPagina(nombreDePagina) {
        if (!nombreDePagina || nombreDePagina=="") {
            throw new Error('EL nombre de la pagina no puede estar vacio');
        }
        let worksheet = this.workbook.getWorksheet(nombreDePagina);
        if (!worksheet) {
            worksheet = this.workbook.addWorksheet(nombreDePagina);
        } else {
            throw new Error('Nombre de pagina ya existe');
        }
    }

    getWorksheet(nombreDePagina) {
        const worksheet = this.workbook.getWorksheet(nombreDePagina);
        if (!worksheet) {
            throw new Error('Nombre de pagina invalido');
        }
        return worksheet;
    }

    escribirEnFila(nombreDePagina, filaDesde, colDesde, contenido) {
        const worksheet = this.getWorksheet(nombreDePagina);

        if (contenido) {
            for (let i = 0; i < contenido.length; i++) {
                const cell = worksheet.getCell(filaDesde, colDesde + i);
                cell.value = contenido[i];
            }
            
        }else{
            throw new Error('Nombre de pagina invalido');

        }
    }

    escribirEnFilaObjeto(nombreDePagina, filaDesde, colDesde, contenido) {
      
        const worksheet = this.getWorksheet(nombreDePagina);
        if (contenido) {
            let i = 0
            for (const property in contenido) {
                const cell = worksheet.getCell(filaDesde, colDesde + i);
                i++
                cell.value = contenido[property];
            }
            
        }else{
            throw new Error('No se pudo Escribir en Fila');
        }
    }

    escribirEnColumna(nombreDePagina, filaDesde, colDesde, contenido) {
        const worksheet = this.getWorksheet(nombreDePagina);
        console.log(contenido.keys.length)
        if (contenido) {
            for (let i = 0; i < contenido.length; i++) {
                const cell = worksheet.getCell(filaDesde + i, colDesde);
                cell.value = contenido[i];
            }
            throw new Error('No se pudo Escribir en Columna')
        }
    }

    async guardarArchivo(filePath) {
        if (!filePath|| filePath =="") {
            throw new Error("El nombre del archivo no puede estar vacio")
        }
        const archivo = `../src/assets/reportes/${filePath}.xlsx`
        console.log(archivo)
        await this.workbook.xlsx.writeFile(archivo);
        console.log("Creado")
    }
}

export default ReporteEnExcelBuilder;












