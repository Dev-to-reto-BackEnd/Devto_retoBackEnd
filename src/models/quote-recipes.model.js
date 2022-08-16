const mongoose = require("moongose")
const {Schema} = mongoose

const quoteRecipesSchema = new Schema({
    quoteId: {
        type: Schema.Types.ObjectId,
        required: true,
        minLength: 3,
        ref: "quote"
    },
    recipeId: {
        type: Schema.Types.ObjectId,
        required: true,
        minLength: 3,
        ref: "recipes"
    },
    quantityId: {
        type: number,
        required: true,
        minLength: 1,
    },
    createdAt:{
        type: string,
        required: true,
        minLength: 3
    }
})

const QuoteRecipes = mongoose.model("quoteRecipes", quoteRecipesSchema)

module.exports= QuoteRecipes