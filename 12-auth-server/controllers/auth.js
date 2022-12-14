const { response } = require('express');
const Usuario = require('../models/Usuario'); //* Importación por defaultr
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const { db } = require('../models/Usuario');

const crearUsuario = async (req,res = response) => { //* res=response es solo para dar un tipado
    const { name,email,password } = req.body;
    try{
        //Verificar el email (que sea unico)
        const usuario = await Usuario.findOne({ email });

        if(usuario) return res.status(400).json({
            ok: false,
            msg: 'El usuario ya existe con ese email'
        });


        //Crear usuario con el modelo
        const dbUser = new Usuario( req.body );
        //Hashear la contraseña 
        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync( `${password}`, salt );

        //Generar el JWT
        const token = await generarJWT(dbUser.id, name);

        //Crear usuario de BD
        await dbUser.save();

        //Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
    }
    
    
 


const loginUsuario = async (req,res = response) => {
    const { email,password } = req.body;
    try{
        const dbUser = await Usuario.findOne({email});

        if(!dbUser) return res.status(400).json({
            ok: false,
            msg: 'El correo no existe'
        });

        //Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password,dbUser.password);
    
        if(!validPassword) return res.status(400).json({
            ok: false,
            msg: 'El password no es válido'
        });

        // Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name);

        //Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })

    }
}


const revalidarToken =  async (req,res = response) => {
    
    const { uid, name } = req; //*Puedo obtenerlas porque antes de llegar al controller paso por el middleware, si todo sale bien se le asigna uid y name al req y puedo acceder a ellas acá porque los objetos pasan por referencia y se modifica el mismo objeto

    // Generar el JWT
    const token = await generarJWT(uid, name);

    return res.json({
        ok: true,
        uid,
        name,
        token
    })
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}