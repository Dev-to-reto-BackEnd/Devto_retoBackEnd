const {createRecipe,updateRecipe, deleteRecipe} = require("../usecases/recipe.usecase")
const express = requiere("express")
const router = express.router()

router.post("/recipes", async(request, response) =>{
    try{
        const recipe = await createRecipe()
        response.json({
            success:true,
            data:{
                recipe
            }
        })


    }catch(err){
        response.status(err.status || 500)
        response.json({
            succes:false,
            message: err.message
        })
    }

})

router.patch("/recipes/:id", auth, async (request, response)=>{
    try{
        const recipe = await updateMaterial(id, request.body)
        response.json({
            success:true,
            data:{
                recipe
            }
        })
    }catch(err){
        response.status(err.status || 400)
        response.json({
            success : false,
            message: err.message
        })
    }
})

router.delete("/recipes/:id", auth, async(request, response)=>{
    const {id} = request.params
    try{
        const recipe = await deleteMaterial(id)
        response.status(200)
        response.json({
            success:true,
            message: "Se ha eliminado el material"
        })
    }catch(err){
        response.status(error.status || 500)
        response.json({
            success : false,
            message: error.message
        })
    }
})