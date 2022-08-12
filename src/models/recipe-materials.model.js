const mongoose = require("moongose")
const {Schema} = mongoose

const recipeMaterialsSchemma = new Schema({
    recipeId: {
        type: Schema.Types.ObjectId,
        required: true,
        minLength: 3,
        ref: "recipes"
    },
    materialId: {
        type: Schema.Types.ObjectId,
        required: true,
        minLength: 3, 
        ref: "materials"
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