
import { Roles } from './Roles.js'
class Persona {
    constructor(id, nombre, edad, rol, email) {
        this.id = id
        this.setNombre(nombre)
        this.setEdad(edad)
        // this.setDireccion(direccion)
        this.setRol(rol)
        this.mascotas = []
        this.setEmail(email)
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

    setRol(rol) {
        switch (rol) {
            case Roles.Administrador:
                this.rol = rol
                break
            case Roles.Adoptante:
                this.rol = rol
                break
            case Roles.Publicador:
                this.rol = rol
                break
            default:
                throw new Error('El rol no es valido')
        }
    }

    setNombre(nombre) {
        if (!nombre || nombre == '') {
            throw new Error('el nombre no puede ser nulo ni vacío')
        }
        this.nombre = nombre
    }

    setEmail(email) {
        if (!email || email == '') {
            throw new Error('el email no puede ser nulo ni vacío')
        }
        this.email = email
    }


    asignarMascota(id) {
        this.mascotas.push(id)
    }

    static ultimoId = 0

    static nextId() {
        return ++Persona.ultimoId
    }
}

function fromDTO(dto) {
    return new Persona(dto.id, dto.nombre, dto.edad, dto.rol, dto.mascotas, dto.email)
}

function toDTO(persona) {
    return {
        id: persona.id,
        nombre: persona.nombre,
        edad: persona.edad,
        rol: persona.rol,
        mascotas: persona.mascotas, 
        email: persona.email
    }
}

export { fromDTO, toDTO }

export default Persona