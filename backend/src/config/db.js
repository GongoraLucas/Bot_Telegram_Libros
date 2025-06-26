const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({path:".env.local"})
const uri = process.env.MONGO_DB_URI;

const connectToMongoDB = async ()=>{
    try{
        console.log(uri)
        await mongoose.connect(uri)
        console.log("Conexión exitosa con MongoDB")

    }catch(error){
        console.log("Error con conexión a la base de datos: "+error);
    }

}

module.exports={
    connectToMongoDB
}

