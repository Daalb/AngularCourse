const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (req,res = response, next) => {

    const token = req.header('x-token');

    if(!token) return res.status(401).json({
        ok: false,
        msg: 'Error en el token'
    })

    try{
        //*Devuelce un payload
        const {uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED); //*Para saber si el JWT fue firmado con esa llave
        
        //*Como los objetos en JS se pasan por referencia estoy editando el mismo objeto req
        req.uid = uid;
        req.name = name;        

    }catch(error){
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })
    }


    next();
}

module.exports = {
    validarJWT
}