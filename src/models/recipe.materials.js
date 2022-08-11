const mongoose = require("moongose")


const recipeMaterialsSchemma = new mongoose.Schema({
    recipeId: {
        type: string,
        required: true,
        minLength: 3
    },
    materialID: {
        type: string,
        required: true,
        minLength: 3
    },
    quantity: {
        type: number,
        required: true,
        minLength: 1
    },
    createdAt: {
        type: string,
        required: true,
        minLength: 3
    }
})

const RecipeMaterials = mongoose.model("recipeMaterials", recipeMaterialsSchemma)

module.exports= RecipeMaterials