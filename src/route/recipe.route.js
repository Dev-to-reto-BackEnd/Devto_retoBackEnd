const {createRecipe,updateRecipe, deleteRecipe} = require("../usecases/recipe.usecase")
const express = require("express")
const router = express.Router()

router.get("/", async (request, response) => {
    try {
      const recipe = await getRecipe()
      response.json({
        recipe
      })
    }catch(error) {
      response.status(error.status || 500)
      response.json({
        success: true,
        message: error.message
      })
    }
  })

router.post("/create", async(request, response) =>{
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

router.patch("/update/:id", async (request, response)=>{
    try{
        const recipe = await updateRecipe(id, request.body)
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

router.delete("/:id", async(request, response)=>{
    const {id} = request.params
    try{
        const recipe = await deleteRecipe(id)
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