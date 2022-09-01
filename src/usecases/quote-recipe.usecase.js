const QuoteRecipe = require("../models/quote-recipes.model")

const getQuoteRecipe = () => {
    return QuoteRecipe.find({})
}

const createQuoteRecipe = (data) =>{
    return QuoteRecipe.create(data)
}

const updateQuoteRecipe = (id, data) =>{
    return QuoteRecipe.findByIdAndUpdate(id,data,{returnDocument:"after"})
}

const deleteQuoteRecipe =  (id)=>{
    return QuoteRecipe.findByIdAndUpdate(id)
}

module.exports = {getQuoteRecipe, createQuoteRecipe, updateQuoteRecipe, deleteQuoteRecipe}