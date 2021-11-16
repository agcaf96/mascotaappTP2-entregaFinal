import DaoMascotas from './DaoMascotas.js'
import { db } from '../config.js'
import { MongoClient } from 'mongodb'

const username = db.username
const password = db.password
const database = db.database
const serverUrl = db.serverUrl

const cnxStr = `mongodb+srv://${username}:${password}@${serverUrl}/${database}?retryWrites=true&w=majority`

const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true })



class DaoMascotasMongoDb extends DaoMascotas {

    constructor() {
        super()
        this.mascotas = client.db("mascotaapp").collection("mascotas")
    }

    async buscar(id) {
        let buscada
        try {
            await client.connect()
            buscada = await this.mascotas.findOne({ id })
            if (buscada == null) {
                throw new Error("Mascota no encontrada")
            }
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        } finally {
            await client.close()
        }

        delete buscada._id

        return buscada
    }

   
    async contarMascotas() {

        let ultimoId
        try {
            await client.connect()
            ultimoId = await this.mascotas.count({})
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        } finally {
            await client.close()
        }
        return ultimoId
    }

    async guardar(mascota) {
        try {
            await client.connect()
            await this.mascotas.replaceOne({ id: mascota.id }, { ...mascota }, { upsert: true })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        } finally {
            await client.close()
        }
    }
}

export default DaoMascotasMongoDb