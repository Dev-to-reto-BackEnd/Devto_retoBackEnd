const Quote = require("../models/quote.model")
const Client = require("../models/client.model")
const Quoter = require("../models/quoter.model")
const Recipe = require("../models/recipe.model")


const createQuote = async (data) => {
    const {clientId, quoterId, recipeId }= data

    const client = await Client.findById(clientId)
    if(!client) throw new Error ("Client not found")

    const quoter = await Quoter.findById(quoterId)
    if(!quoter) throw new Error ("Quoter not found")

    const recipe = await Recipe.findById(recipeId)
    if(!recipe) throw new Error ("Recipe not found")
    
    return Quote.create(data)
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