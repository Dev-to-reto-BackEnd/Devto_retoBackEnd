const RecipeMaterials = require("../models/recipe-materials.model")
const Material = require("../models/material.model")

const getRecipeMaterials = () => {
    return RecipeMaterials.find({})
}

const createRecipeMaterials = (data) => {
    const {materialId}= data
    const material = await Material.findById(materialId)
    if(!material) throw new Error ("Material not found")

    return RecipeMaterials.create(data)
}

const updateRecipeMaterials = (id, data)=>{
    return RecipeMaterials.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteRecipeMaterials = (id) => {
    return RecipeMaterials.findByIdAndDelete(id)  
}

module.exports = {getRecipeMaterials, createRecipeMaterials, updateRecipeMaterials, deleteRecipeMaterials}