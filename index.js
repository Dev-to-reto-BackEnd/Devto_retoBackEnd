require("dotenv").config()
const server = require("./src/server")
const mongoose= require("mongoose")

const{DB_USER, DB_PASSWORD, DB_HOST, DB_NAME}= process.env
console.log(process.env)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then(() => {
    console.log("Connected to DB")
    server.listen(8080, (request, response) => {
        console.log("Our Server in on")
    })
})
.catch((err) =>{
    console.log("There was an error", (err))
})
