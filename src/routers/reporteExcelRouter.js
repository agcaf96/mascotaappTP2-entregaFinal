import Router from 'express';
import { crearReporte } from '../casosDeUso/crearReporte.js';

const reporteExcelRouter = Router()

reporteExcelRouter.post('/reporteExcel', async (req, res) => {
    try {

        await crearReporte(req.body.idUsuario, req.body.nombrePlanilla, req.body.outputPath)
        res.json("Excel creado: " + req.body.outputPath)

    } catch (error) {
        res.status(400)
        res.json({ error: error.message })
    }

})

export { reporteExcelRouter };