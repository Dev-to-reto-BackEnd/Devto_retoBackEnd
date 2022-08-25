const mongoose = require("mongoose")
const {Schema}=mongoose
const addBusinessDays = require('date-fns/addBusinessDays')

const quoteSchemma = new mongoose.Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        required: true,
        minLength: 3,
        ref:"clients"
    },
    quoterId: {
        type: Schema.Types.ObjectId,
        required: true,
        minLength: 3,
        ref:"quoters"
    },
    expirationDate: {
        type: Date,
        default: () => addBusinessDays(new Date(), 15)
        
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
        type: Date,
        default: ()=> new Date(),
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