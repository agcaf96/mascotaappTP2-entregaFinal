import DaoMascotas from './DaoMascotas.js'

class DaoMascotasMem extends DaoMascotas {
    constructor() {
        super()
        this.mascotas = []
    }

    async buscar(id) {
        const index = this.mascotas.findIndex(p => p.id === id)
        if (index != -1) {
            return this.mascotas[ index ]
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async contarMascotas(){
        return this.mascotas.length
    }
    async guardar(mascota) {
        const index = this.mascotas.findIndex(p => p.id === mascota.id)
        if (index == -1) {
            this.mascotas.push(mascota)
        } else {
            this.mascotas[ index ] = mascota
        }
    }
    

}



export default DaoMascotasMem