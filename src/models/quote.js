const mongoose = require("moongose")


const quoteSchemma = new mongoose.Schema({
    clientId: {
        type: string,
        required: true,
        minLength: 3
    },
    quoteId: {
        type: string,
        required: true,
        minLength: 3
    },
    expirationDate: {
        type: date,
        required: true,
        minLength: 1
    },
    profit: {
        type: number,
        required: true,
        minLength: 1
    }, 
    riskFactor: {
        type: number,
        required: true,
        minLength: 1
    },
    financing: {
        type: number,
        required: true,
        minLength: 1
    },
    createdAt: {
        type: string,
        required: true,
        minLength: 3
    },
    note: {
        type: string,
        required: false,
    },
    photos: {
        type: string,
        required: true,
    }
})

const Quote = mongoose.model("quote", quoteSchemma)

module.exports= Quote