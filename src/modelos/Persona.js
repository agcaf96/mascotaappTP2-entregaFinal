
import { Roles } from './Roles.js'
import { } from '../daos/DaoPersonas.js'
class Persona {
    constructor(id, nombre, edad, rol,mascotas =[] ,email) {
        this.id = id
        this.setNombre(nombre)
        this.setEdad(edad)
        // this.setDireccion(direccion)
        this.setRol(rol)
        this.mascotas = mascotas
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
        this.edad = num
    }

    setRol(rol) {

        const rol2 = rol.toLowerCase()
        switch (rol2) {
            case Roles.Administrador:
                this.rol = rol2
                break
            case Roles.Adoptante:
                this.rol = rol2
                break
            case Roles.Publicador:
                this.rol = rol2
                break
            case "":
                throw new Error('El rol no puede estar vacio ')
            default:
                throw new Error('El rol no es valido')
        }
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

    setEmail(email) {
       
        if (!email || email == '') {
            throw new Error('el email no puede ser nulo ni vacío')
        }
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(email)) {
            throw new Error('el formato de email no es valido')
        }
        this.email = email
    }

    asignarMascota(id) {
        const existeMascota = this.mascotas.includes(id)

        if (existeMascota) {
            throw new Error("Ya existe esa mascota")
        } else {
            this.mascotas.push(id)
        }
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