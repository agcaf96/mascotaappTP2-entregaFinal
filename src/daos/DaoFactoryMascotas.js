import DaoMascotasMem from './DaoMascotasMem.js'
import DaoMascotasMongoDb from './DaoMascotasMongoDb.js'

import { tipoMasc } from '../config.js'

let daoMascotas

switch (tipoMasc) {
    case 'MEM':
        daoMascotas = new DaoMascotasMem()
        break
    case 'DB':
        daoMascotas = new DaoMascotasMongoDb()
        break
    default:
        daoMascotas = new DaoMascotasMem()
}

function getDaoMascotas() {
    return daoMascotas
}

export { getDaoMascotas }