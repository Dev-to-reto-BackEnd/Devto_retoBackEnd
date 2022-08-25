const RecipeMaterials = require("../models/recipe-materials.model")

const getRecipeMaterials = () => {
    return RecipeMaterials.find({})
}

const createRecipeMaterials = (data) => {
    return RecipeMaterials.create(data)
}

const updateRecipeMaterials = (id, data)=>{
    return RecipeMaterials.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteRecipeMaterials = (id) => {
    return RecipeMaterials.findByIdAndDelete(id)  
}

module.exports = {getRecipeMaterials, createRecipeMaterials, updateRecipeMaterials, deleteRecipeMaterials}