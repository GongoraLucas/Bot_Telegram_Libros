const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors")
const {connectToMongoDB} = require("./config/db")

dotenv.config({path:".env.local"})

const app = express()
const port = process.env.PORT ?? 5000

app.use(express.json())
app.use(cors())



connectToMongoDB()

app.get("/",(req,res)=>{
    res.send("Api de libros bienvenido")
})

app.listen(port,()=>{
    console.log(`Escuchando en http://localhost:${port}`)
})

