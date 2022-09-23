const QuoteRecipe = require("../models/quote-recipes.model")
const Quote = require("../models/quote.model")
const Recipe = require("../models/recipe.model")

const getQuoteRecipe = () => {
    return QuoteRecipe.find({})
}

const createQuoteRecipe =async (data) =>{
    const {quoteId, recipeId}= data

    const quote = await Quote.findById(quoteId)
    if(!quote) throw new Error ("Cotización no encontrada")

    const recipe = await Recipe.findById(recipeId)
    if(!recipe) throw new Error ("Receta no encontrada")
    
    return QuoteRecipe.create(data)
}

const updateQuoteRecipe = (id, data) =>{
    return QuoteRecipe.findByIdAndUpdate(id,data,{returnDocument:"after"})
}

const deleteQuoteRecipe =  (id)=>{
    return QuoteRecipe.findByIdAndUpdate(id)
}

module.exports = {getQuoteRecipe, createQuoteRecipe, updateQuoteRecipe, deleteQuoteRecipe}