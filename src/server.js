import express from 'express'
import {publicadorDeImagen} from '../src/routers/publicadorDeImagen.js'
import {personasRouter} from '../src/routers/personaRouter.js'
import {mascotasRouter} from '../src/routers/mascotaRouter.js'
import {reporteExcelRouter} from '../src/routers/reporteExcelRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/imagenes', publicadorDeImagen)
app.use('/api/personas', personasRouter)
app.use('/api/mascotas', mascotasRouter)
app.use('/api/reporteExcel', reporteExcelRouter)


const server = app.listen(3000, () => {
    console.log(`conectado a ${server.address().port}!`)
})