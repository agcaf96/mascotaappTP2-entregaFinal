class Mascota {
    constructor(id = null, nombre, edad, especie, color, sexo) {
        this.id = id
        this.setNombre(nombre)
        this.setColor(color)
        this.setEdad(edad)
        this.setEspecie(especie)
        this.setSexo(sexo)
        this.estado = 'Publicado';
        this.imagen = "";
    }

    setEdad(edad) {
        const num = Number(edad)
        if (isNaN(num)) {
            throw new Error('la edad debe ser numerica')
        }
        if (num <= 0) {
            throw new Error('la edad debe ser positiva')
        }
        this.edad = edad
    }

    setNombre(nombre) {
        if (!nombre || nombre == '') {
            throw new Error('el nombre no puede ser nulo ni vacío')
        }
        this.nombre = nombre
    }
    
    setColor(color) {
        if (!color || color == '') {
            throw new Error('el color no puede ser nulo ni vacío')
        }
        this.color = color
    }
    setEspecie(especie) {
        if (!especie || especie == '') {
            throw new Error('la especie no puede ser nula ni vacía')
        }
        this.especie = especie
    }
    setSexo(sexo) {
        if (!sexo || sexo == '') {
            throw new Error('el sexo no puede ser nulo ni vacío')
        }
        this.sexo = sexo
    }
    agregarImagen(imagen){
        this.imagen = imagen;
    }

    static ultimoId = 0

    static nextId() {
        return ++Mascota.ultimoId
    }
}

function fromDTO(dto) {
    return new Mascota(dto.id, dto.nombre, dto.edad, dto.especie, dto.color, dto.sexo, dto.estado,dto.imagen )
}

function toDTO(mascota) {
    return {
        id: mascota.id,
        nombre: mascota.nombre,
        edad: mascota.edad,
        especie: mascota.especie,
        color: mascota.color,
        sexo: mascota.sexo,
        estado: mascota.estado,
        imagen: mascota.imagen
    }
}

export { fromDTO, toDTO }

export default Mascota