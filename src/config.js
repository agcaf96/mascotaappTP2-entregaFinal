

const tipoPers = 'DB'
const tipoMasc = 'DB'

//Cambiar
//mongodb+srv://admin:<password>@cluster0.bq0qz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const db = {
    serverUrl: 'cluster0.bq0qz.mongodb.net',
    username: 'admin',
    password: 'admin',
    database: 'mascotaapp',
}

export {
    tipoPers,
    tipoMasc,
    db
}