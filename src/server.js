const express = require("express")
const cors = require("cors")
const routerClients= require("./route/client.route")
const routerMaterials= require("./route/material.route")
const routerQuoter= require("./route/quoter.route")
const routerRecipe= require("./route/recipe.route")
const routerRecipeMaterial= require("./route/recipe-materials.route")
const routerQuote= require("./route/quote.route")
const routerLogin= require("./route/auth.route")

const app = express()

//Middlewares 
//conection
app.use(cors())
app.use(express.json())

//global
app.use((request, response, next) =>{
    console.log(request.method, "Estamos por un middleware")
    next()
})

//Home
app.get("/", (request, response) =>{
    response.json({
        message:"Endpoint de home"
    })
})

//Use
app.use("/client", routerClients)
app.use("/materials", routerMaterials)
app.use("/quoter", routerQuoter)
app.use("/recipe", routerRecipe)
app.use("/recipe-materials", routerRecipeMaterial)
app.use("/quote", routerQuote)
app.use("/login", routerLogin)

module.exports = app