const Quote = require("../models/quote.model")
const Client = require("../models/client.model")
const Quoter = require("../models/quoter.model")


const createQuote = async (data) => {
    const {clientId, quoterId }= data

    const client = await Client.findById(clientId)
    if(!client) throw new Error ("Client not found")

    const quoter = await Quoter.findById(quoterId)
    if(!quoter) throw new Error ("Quoter not found")
    
    return Quote.create(data)
}

const updateQuote = async (id, data)=>{
    const Quote = await Quote.findByIdAndUpdate(id, data, {returnDocument:"after"})
    return Quote
}

const deleteQuote = async (id) => {
    const Quote = await Quote.findByIdAndDelete(id)
    return "Eliminado"
}

const getAllQuote =  () => {
    return Quote.find({}).populate("clientId quoterId")
} 

module.exports = {createQuote, updateQuote, deleteQuote, getAllQuote}