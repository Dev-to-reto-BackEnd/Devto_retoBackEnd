const mongoose = require("mongoose")
const {Schema} = mongoose

const recipeMaterialsSchemma = new Schema({
    recipeId: {
        type: Schema.Types.ObjectId,
        minLength: 3,
        ref: "recipes", 
        required:true
    },
    materialId: {
        type: Schema.Types.ObjectId,
        ref: "materials",
        required:true
    },
    quantity: {
        type: Number,
        required: true,
        minLength: 1
    }, 
    createdAt: {
        type: Date,
        default: ()=> new Date()
    }
})

const RecipeMaterials = mongoose.model("recipeMaterials", recipeMaterialsSchemma)

module.exports= RecipeMaterials