const express = require("express")
const routerClients= require("./route/client.route")
const routerMaterials= require("./route/material.route")
const routerQuoter= require("./route/quoter.route")
const routerRecipe= require("./route/recipe.route")
const routerRecipeMaterial= require("./route/recipe-materials.route")
const routerQuote= require("./route/quote.route")

const app = express()
//Middlewares
app.use(express.json())
app.use("/client", routerClients)
app.use("/materials", routerMaterials)
app.use("/quoter", routerQuoter)
app.use("/recipe", routerRecipe)
app.use("/recipe-materials", routerRecipeMaterial)
app.use("/quote", routerQuote)


app.get("/", (request, response) =>{
    response.json({
        message:"Endpoint de home"
    })
})



module.exports = app