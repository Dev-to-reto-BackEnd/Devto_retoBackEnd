const RecipeMaterials = require("../models/recipe-materials.model")
const mongoose = require("mongoose")

const getRecipeMaterials = async () => {
    const recipeMaterials = await RecipeMaterials.find({})
    return recipeMaterials
}

const createRecipeMaterials = async (data) => {
    const recipeMaterialsData = RecipeMaterials.create(data)
    return recipeMaterialsData
}

const updateRecipeMaterials = async (id, data)=>{
    const recipeMaterials = await RecipeMaterials.findByIdAndUpdate(id, data, {returnDocument:"after"})
    return recipeMaterials
}

const deleteRecipeMaterials = async (id, data) => {
    const recipeMaterials = await RecipeMaterials.findByIdAndDelete(id)
    return "Eliminado"
}

module.exports = {getRecipeMaterials, createRecipeMaterials, updateRecipeMaterials, deleteRecipeMaterials}