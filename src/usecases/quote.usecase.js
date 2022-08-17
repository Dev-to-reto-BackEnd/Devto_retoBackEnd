const Quote = require("../models/quote.model")
const mongoose = require("mongoose")

const getQuote = async () => {
    const quote = await Quote.find({})
    return quote
}

const createQuote = async (data) => {
    const QuoteData = Quote.create(data)
    return QuoteData
}

const updateQuote = async (id, data)=>{
    const Quote = await Quote.findByIdAndUpdate(id, data, {returnDocument:"after"})
    return Quote
}

const deleteQuote = async (id, data) => {
    const Quote = await Quote.findByIdAndDelete(id)
    return "Eliminado"
}

module.exports = {getQuote, createQuote, updateQuote, deleteQuote}