const {createRecipeMaterials, updateRecipeMaterials, deleteRecipeMaterials} = require("../usecases/recipe-materials.usecase")
const express = require("express")
const router = express.Router()

router.post("/recipes-materials", async(request, response) =>{
    try{
        const recipe = await createRecipeMaterials()
        response.json({
            success:true,
            data:{
                recipeMaterials
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

router.patch("/recipes-materials/:id", async (request, response)=>{
    try{
        const recipeMaterials = await updateRecipeMaterials(id, request.body)
        response.json({
            success:true,
            data:{
                recipeMaterials
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

router.delete("/recipes-materials/:id", async(request, response)=>{
    const {id} = request.params
    try{
        const recipe = await deleteRecipeMaterials(id)
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