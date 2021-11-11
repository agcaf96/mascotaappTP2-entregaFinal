import DaoPersonas from './DaoPersonas.js'
import { db } from '../config.js'
import { MongoClient } from 'mongodb'

const username = db.username
const password = db.password
const database = db.database
const serverUrl = db.serverUrl

const cnxStr = `mongodb+srv://${username}:${password}@${serverUrl}/${database}?retryWrites=true&w=majority`

const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true })

await client.connect()

class DaoPersonasMongoDb extends DaoPersonas {

    constructor() {
        super()
        this.personas = client.db("mascotaapp").collection("personas")
    }

    async buscar(id) {
        let buscada
        try {
            buscada = await this.personas.findOne({ id })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }

        delete buscada._id

        return buscada
    }

    async guardar(persona) {
        try {
            await this.personas.replaceOne({ id: persona.id }, { ...persona }, { upsert: true })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }
    }
}

export default DaoPersonasMongoDb