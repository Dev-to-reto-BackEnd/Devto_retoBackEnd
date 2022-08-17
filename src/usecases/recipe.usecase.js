const Recipe = require("../models/recipe.model")
const mongoose = require("mongoose")

const getRecipe = async => {
    const recipe = await Recipe.find({})
    return recipe
}

const createRecipe = async (data) => {
    const recipeData = Recipe.create(data)
    return recipeData
}

const updateRecipe = async (id, data)=>{
    const recipe = await Recipe.findByIdAndUpdate(id, data, {returnDocument:"after"})
    return recipe
}

const deleteRecipe = async (id, data) => {
    const recipe = await Recipe.findByIdAndDelete(id)
    return "Eliminado"
}

module.exports = {getRecipe, createRecipe,updateRecipe, deleteRecipe}