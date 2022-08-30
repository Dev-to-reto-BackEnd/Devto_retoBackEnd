const Recipe = require("../models/recipe.model")
const RecipeMaterials = require ("../models/recipe-materials.model")

const getRecipe = () => {
   return Recipe.find({})
}

const createRecipe = async (data) => {
    const {recipeMaterialsId}= data

    const recipeMaterials = await RecipeMaterials.findById(recipeMaterialsId)
    if(!recipeMaterials) throw new Error ("Recipe Material not found")

    return Recipe.create(data)
}

const updateRecipe = (id, data)=>{
    return Recipe.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteRecipe =  (id) => {
    return Recipe.findByIdAndDelete(id)
}

module.exports = {getRecipe, createRecipe, updateRecipe, deleteRecipe}