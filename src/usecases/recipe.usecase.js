const Recipe = require("../models/recipe.model")
const {createRecipeMaterials} = require ("../usecases/recipe-materials.usecase")

const getRecipe = () => {
    return Recipe.find({})
}

const createRecipe = async (data) =>{
    const{materials}=data
    const recipeCreated = await Recipe.create(data)
    
    for(const material of materials){
        await createRecipeMaterials({
            recipeId:recipeCreated._id,
            materialId: material.id,
        })
    }
    return recipeCreated
}

const updateRecipe = (id, data)=>{
    return Recipe.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteRecipe = (id) => {
    return Recipe.findByIdAndDelete(id)
}

module.exports = {getRecipe, createRecipe, updateRecipe, deleteRecipe}