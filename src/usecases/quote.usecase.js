const Quote = require("../models/quote.model")
const {createQuoteRecipe}= require("./quote-recipe.usecase")

const createQuote = async (quoterId, data) => {
    data.quoterId=quoterId
    const {recipes}= data
    const quoteCreated= await Quote.create(data)

    for(const recipe of recipes){
        await createQuoteRecipe({
            quoteId: quoteCreated._id,
            recipeId: recipe.id,
            quantity: recipe.quantity
        })
    }
    return quoteCreated
}

const getByQuoterId = (quoterId) => {
    return Quote.find({quoterId})
}

const updateQuote = (id, data)=>{
    return Quote.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteQuote = (id) => {
    return Quote.findByIdAndDelete(id)
}

module.exports = {getByQuoterId, createQuote, updateQuote, deleteQuote}