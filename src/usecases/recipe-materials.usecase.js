const RecipeMaterials = require("../models/recipe-materials.model")
const Material = require("../models/material.model")
const Recipe = require("../models/recipe.model")

const getRecipeMaterials = () => {
    return RecipeMaterials.find({})
}

const createRecipeMaterials = async (data) => {
    const {materialId, recipeId}= data
    // console.log("materialId", materialId)
    // console.log("recipeId", recipeId)

    const material = await Material.findById(materialId)
    if(!material) throw new Error ("Material no encontrado")

    const recipe = await Recipe.findById(recipeId)
    if(!recipe) throw new Error ("Receta no encontrada")
    
    return RecipeMaterials.create(data)
}

const updateRecipeMaterials = (id, data)=>{
    return RecipeMaterials.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteRecipeMaterials = (id) => {
    return RecipeMaterials.findByIdAndDelete(id)  
}

module.exports = {getRecipeMaterials, createRecipeMaterials, updateRecipeMaterials, deleteRecipeMaterials}
