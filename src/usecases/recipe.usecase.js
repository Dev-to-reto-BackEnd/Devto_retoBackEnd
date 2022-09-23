const Recipe = require("../models/recipe.model")
const {createRecipeMaterials} = require ("../usecases/recipe-materials.usecase")

const getByQuoterId= (quoterId)=>{
    return Recipe.find({quoterId})
}

const createRecipe = async (quoterId, data) =>{
    data.quoterId=quoterId
    const{materials}=datab 
    const recipeCreated = await Recipe.create(data)
    
    for(const material of materials){
        await createRecipeMaterials({
            recipeId:recipeCreated._id,
            materialId: material.id,
            quantity:material.quantity
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

module.exports = {createRecipe, updateRecipe, deleteRecipe, getByQuoterId}