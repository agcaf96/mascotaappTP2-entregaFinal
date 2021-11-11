import express from 'express'
import {publicadorDeImagen} from '../src/routers/publicadorDeImagen.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/upload', publicadorDeImagen)


const server = app.listen(3000, () => {
    console.log(`conectado a ${server.address().port}!`)
})