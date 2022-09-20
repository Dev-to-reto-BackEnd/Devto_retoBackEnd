require("dotenv").config()
const server = require("./src/server")
const mongoose= require("mongoose")

const{DB_USER, DB_PASSWORD, DB_HOST, DB_NAME}= process.env
// console.log(process.env)

// mongodb+srv://<username>:<password>@opsurvey.ymmmfih.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then(() => {
    console.log("Conectado a la base de datos")
    server.listen(8080, (request, response) => {
        console.log("Nuestro servidor está encendido")
    })
})
.catch((err) =>{
    console.log("Hubo un error", (err))
})
