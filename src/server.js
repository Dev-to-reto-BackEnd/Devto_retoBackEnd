const express = require("express")
const app = express()
const routerClients= require("./route/client.route")
const routerMaterials= require("./route/material.route")
const routerQuoter= require("./route/quoter.route")
const routerRecipe= require("./route/recipe.route")
const routerRecipeMaterial= require("./route/recipe-materials.route")
const routerQuote= require("./route/quote.route")

//Middlewares
app.use(express.json())
app.use("/create-client", routerClients)

app.get("/", (request, response) =>{
    response.json({
        message:"Endpoint de home"
    })
})



module.exports = app