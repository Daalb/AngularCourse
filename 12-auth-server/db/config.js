const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("*****Base de datos arriba*****");//*Se la conexión funciona se muestra el mensaje
    }catch(error){
        console.log(error)
        throw new Error('Error a la hora de inicializar la BD')
    }
}

module.exports = {
    dbConnection
}