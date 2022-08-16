const express = require("express")
const app = express()
const routerClients= require("./route/client.route")
const routerMaterials= require("./route/material.route")
const routerQuoter= require("./route/quoter.route")
const routerRecipes= require("./route/recipe.route")

//Middlewares
app.use(express.json())

app.get("/", (request, response) =>{
    response.json({
        message:"Endpoint de home"
    })
})

module.exports