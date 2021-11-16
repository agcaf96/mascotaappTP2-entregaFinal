import fileUpload from 'express-fileupload'

export function createFileExtractorMiddleware(filesPath) {
    const extractFiles = (req, res, next) => {
        const fuMid = fileUpload({ createParentPath: true })
        fuMid(req, res, () => {
            let uploaded = 0
            let errors = 0
            const filenames = []

            for (const nombreImagen in req.files) {
                try {
                    const imagen = req.files[ nombreImagen ]
                    const idMasc = req.body.id
                    const filename = `${filesPath}/${idMasc}.jpg`
                    imagen.mv(filename)
                    filenames.push(filename)
                    uploaded++
                } catch (err) {
                    errors++
                }
            }
            req.results = { filenames, uploaded, errors }
            next()
        })
    }

    return extractFiles
}
