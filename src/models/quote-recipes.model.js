const mongoose = require("mongoose")
const {Schema} = mongoose

const quoteRecipesSchema = new Schema({
    // quoteId: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     minLength: 3,
    //     ref: "quote"
    // },
    recipeId: {
        type: Schema.Types.ObjectId,
        ref: "recipes"
    },
    quantity: {
        type: Number,
        required: true,
        minLength: 1,
    },
    createdAt:{
        type: String,
        required: true,
        minLength: 3
    }
})

const QuoteRecipes = mongoose.model("quoteRecipes", quoteRecipesSchema)

module.exports= QuoteRecipes