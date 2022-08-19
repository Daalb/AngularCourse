const { validationResult } = require('express-validator')


const validarCampos = (req, res = response, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({
        ok: false,
        errors: errors.mapped()
    })

    next(); //* "Procede al siguiente middleware", si todo sale  bien pasa la siguiente middleware
    //* Con next podemos diferenciar un controlador de un middleware
}


module.exports = {
    validarCampos
}