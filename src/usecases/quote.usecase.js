const Quote = require("../models/quote.model")
const {createQuoteRecipe}= require("./quote-recipe.usecase")

const createQuote = async (data) => {
    const {recipes}= data
    const quoteCreated= await Quote.create(data)

    for(const recipe of recipes){
        await createQuoteRecipe({
            quoteId: quoteCreated._id,
            recipeId: recipe.id,
        })
    }
    return quoteCreated
}

const getAllQuote =  () => {
    return Quote.find({}).populate("clientId quoterId")
} 

const updateQuote = (id, data)=>{
    return Quote.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteQuote = (id) => {
    return Quote.findByIdAndDelete(id)
}

module.exports = {createQuote, updateQuote, deleteQuote, getAllQuote}