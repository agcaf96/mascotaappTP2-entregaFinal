import DaoPersonasMem from './DaoPersonasMem.js'
import DaoPersonasMongoDb from './DaoPersonasMongoDb.js'

import { tipoPers } from '../config.js'

let daoPersonas

switch (tipoPers) {
    case 'MEM':
        daoPersonas = new DaoPersonasMem()
        break
    case 'DB':
        daoPersonas = new DaoPersonasMongoDb()
        break
    default:
        daoPersonas = new DaoPersonasMem()
}

function getDaoPersonas() {
    return daoPersonas
}

export { getDaoPersonas }