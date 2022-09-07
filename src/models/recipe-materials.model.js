const mongoose = require("mongoose")
const {Schema} = mongoose

const recipeMaterialsSchemma = new Schema({
    //recipiId esta ligado a recipe
    recipeId: {
        type: Schema.Types.ObjectId,
        minLength: 3,
        ref: "recipes"
    },
    materialId: {
        type: Schema.Types.ObjectId,
        ref: "materials"
    },
    quantity: {
        type: Number,
        required: true,
        minLength: 1
    }, 
    createdAt: {
        type: Date,
        default: ()=> new Date()
    },
    //esta fecha va variando con cada actualizacion
    lastUpdate:{
        type:Date,
        default: ()=> new Date()
    }
})

const RecipeMaterials = mongoose.model("recipeMaterials", recipeMaterialsSchemma)

module.exports= RecipeMaterials