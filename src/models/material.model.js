const mongoose = require("mongoose")
const { Schema } = mongoose

const materialSchemma = new mongoose.Schema({
    quoterId: {
        type: Schema.Types.ObjectId,
        ref: "quoters",
        required: true
    },
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    unit: {
        type: String,
        required: true,
        maxLength: 20,
    },
    supplier: {
        type: String,
        required: true,
        minLength: 3,
    },
    brand: {
        type: String,
        required: true,
        minLength: 3,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    }
})

const Material = mongoose.model("materials", materialSchemma)

module.exports = Material