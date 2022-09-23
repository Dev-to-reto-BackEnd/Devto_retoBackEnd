const mongoose = require("mongoose")
const {Schema} = mongoose

const quoteRecipesSchema = new Schema({
    quoteId: {
        type: Schema.Types.ObjectId,
        ref: "quote",
        required: true
    },
    recipeId: {
        type: Schema.Types.ObjectId,
        ref: "recipes",
        required:true
    },
    quantity: {
        type: Number,
        required: true,
        minLength: 1,
    },
    createdAt:{
        type: Date,
        default: ()=> new Date()
    }
})

const QuoteRecipes = mongoose.model("quoteRecipes", quoteRecipesSchema)

module.exports= QuoteRecipes