const jwt = require('jsonwebtoken')

const generarJWT = (uid, name) => {
    payload = { uid, name };

    return new Promise((resolve,reject) => {
        jwt.sign(payload,process.env.SECRET_JWT_SEED,{ //*Se coloca dentro de una promesa porque la librería trabaja con callbacks 
            expiresIn: '24h'
        }, (err, token) => {
            if(err){
                console.log(err)
                reject(err);
            }else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}