const express = require("express");
const cors = require("cors");
const routerClients = require("./route/client.route");
const routerMaterials = require("./route/material.route");
const routerQuoter = require("./route/quoter.route");
const routerRecipe = require("./route/recipe.route");
const routerRecipeMaterial = require("./route/recipe-materials.route");
const routerQuote = require("./route/quote.route");
const routerLogin = require("./route/auth.route");
const routerQuoteRecipe = require("./route/quote-recipe.route");

const app = express();

//Middlewares
//conection
app.use(cors());
app.use(express.json());

//Home
app.get("/", (request, response) => {
  response.json({
    message: "Endpoint de home",
  });
});

//Use
app.use("/client", routerClients);
app.use("/material", routerMaterials);
app.use("/quoter", routerQuoter);
app.use("/recipe", routerRecipe);
app.use("/recipe-material", routerRecipeMaterial);
app.use("/quote", routerQuote);
app.use("/quote-recipe", routerQuoteRecipe);
app.use("/login", routerLogin);

module.exports = app;
