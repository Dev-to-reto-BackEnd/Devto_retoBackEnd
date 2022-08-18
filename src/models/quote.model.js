const mongoose = require("mongoose")


const quoteSchemma = new mongoose.Schema({
    clientId: {
        type: String,
        required: true,
        minLength: 3
    },
    quoteId: {
        type: String,
        required: true,
        minLength: 3
    },
    expirationDate: {
        type: String,
        required: true,
        minLength: 1
    },
    profit: {
        type: Number,
        required: true,
        minLength: 1
    }, 
    riskFactor: {
        type: Number,
        required: true,
        minLength: 1
    },
    financing: {
        type: Number,
        required: true,
        minLength: 1
    },
    createdAt: {
        type: String,
        required: true,
        minLength: 3
    },
    note: {
        type: String,
        required: false,
    },
    photos: {
        type: String,
        required: true,
    }
})

const Quote = mongoose.model("quote", quoteSchemma)

module.exports= Quote