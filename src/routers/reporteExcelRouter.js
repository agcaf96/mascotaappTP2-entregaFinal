import Router from 'express';
import { crearReporte } from '../casosDeUso/crearReporte.js';

const reporteExcelRouter = Router()

reporteExcelRouter.post('/reporteExcel', async (req, res) => {
    try {

        await crearReporte(req.body.mascotas, req.body.nombrePlanilla, req.body.outputPath)
        res.json("Excel creado: " + req.body.outputPath)

    } catch (error) {
        res.json({ error: error.message })
    }

})

export { reporteExcelRouter };