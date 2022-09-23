const {createRecipe, updateRecipe, deleteRecipe, getByQuoterId} = require("../usecases/recipe.usecase")
const express = require("express")
const authMiddleware = require("../middlewares/auth.middlewares")

const router = express.Router()

//Middleware de auth
router.use(authMiddleware)

router.get("/", async (request, response) => {
    try {
      const recipe = await getByQuoterId(request.quoter.id)
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

router.post("/", async(request, response) =>{
    try{
        const recipe = await createRecipe(request.quoter.id, request.body)
        response.json({
            success:true,
            data:{
                recipe
            }
        })
    }catch(err){
        response.status(err.status || 500)
        response.json({
            success:false,
            message: err.message
        })
    }

})

router.patch("/:id", async (request, response)=>{
    const {id}= request.params
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
            message: "Se ha eliminado la receta"
        })
    }catch(err){
        response.status(error.status || 500)
        response.json({
            success : false,
            message: error.message
        })
    }
})

module.exports = router