class Mascota {
    constructor(id = null, nombre, edad, especie, color, sexo, ubicacion = {}) {
        this.id = id
        this.setNombre(nombre)
        this.setColor(color)
        this.setEdad(edad)
        this.setEspecie(especie)
        this.setSexo(sexo)
        this.estado = 'Publicado';
        this.imagen = ""
        this.ubicacion = ubicacion
    }

    setEdad(edad) {
        const num = Number(edad)
        if (isNaN(edad)) {
            throw new Error('la edad debe ser numerica')
        }
        if (num <= 0) {
            throw new Error('la edad debe ser positiva')
        }
        this.edad = num
    }

    setNombre(nombre) {
        if (!nombre || nombre == '') {
            throw new Error('el nombre no puede ser nulo ni vacío')
        }
        if (!isNaN(nombre)) {
            throw new Error('el nombre no puede ser numerico ')
        }
        this.nombre = nombre
    }

    setColor(color) {
        if (!color || color == '') {
            throw new Error('el color no puede ser nulo ni vacío')
        }
        if (!isNaN(color)) {
            throw new Error('el color no puede ser numerico ')
        }

        this.color = color
    }
    setEspecie(especie) {
        if (!especie || especie == '') {
            throw new Error('la especie no puede ser nula ni vacía')
        }
        if (!isNaN(especie)) {
            throw new Error('el especie no puede ser numerico ')
        }
        this.especie = especie
    }
    setSexo(sexo) {
        if (!sexo || sexo == '') {
            throw new Error('el sexo no puede ser nulo ni vacío')
        }
        if (!isNaN(sexo)) {
            throw new Error('el sexo no puede ser numerico ')
        }
        this.sexo = sexo
    }
    agregarImagen(imagen) {
        this.imagen = imagen;
    }

    asociarUbicacion(ubicacion) {
        this.ubicacion = ubicacion
    }
  
}

function fromDTO(dto) {
    return new Mascota(dto.id, dto.nombre, dto.edad, dto.especie, dto.color, dto.sexo, dto.estado, dto.imagen, dto.ubicacion)
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
        imagen: mascota.imagen,
        ubicacion: mascota.ubicacion
    }
}

export { fromDTO, toDTO }

export default Mascota