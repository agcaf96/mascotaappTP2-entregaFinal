import DaoPersonas from './DaoPersonas.js'

class DaoPersonasMem extends DaoPersonas {
    constructor() {
        super()
        this.personas = []
    }

    async buscar(id) {
        const index = this.personas.findIndex(p => p.id === id)
        if (index != -1) {
            return this.personas[ index ]
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async guardar(persona) {
        const index = this.personas.findIndex(p => p.id === persona.id)
        if (index == -1) {
            this.personas.push(persona)
        } else {
            this.personas[ index ] = persona
        }
    }

    async eliminar(persona) {
        const index = this.personas.findIndex(p => p.id === persona.id)
        if (index == -1) {
            this.personas.remove(persona)
        } else {
            this.personas[ index ] = persona
        }
    }
}

export default DaoPersonasMem