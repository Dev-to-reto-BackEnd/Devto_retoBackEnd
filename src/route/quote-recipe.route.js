const {getQuoteRecipe, createQuoteRecipe, updateQuoteRecipe, deleteQuoteRecipe}= require("../usecases/quote-recipe.usecase")
const express = require("express")
const authMiddleware = require("../middlewares/auth.middlewares")

const router = express.Router()

//Middleware de auth
router.use(authMiddleware)

router.get("/", async (request, response) => {
    try {
      const quoteRecipe = await getQuoteRecipe()
      response.json({
        quoteRecipe
      })
    }catch(error) {
      response.status(error.status || 500)
      response.json({
        success: true,
        message: error.message
      })
    }
  })

router.post("/", async (request, response)=>{
    try{
        const quoteRecipe = await createQuoteRecipe(request.body)
        response.json({
            succes:true,
            data:{
                quoteRecipe
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
    const {id} = request.params
    try{
        const quoteRecipe = await updateQuoteRecipe(id, request.body)
        response.json({
            success:true,
            data:{
                quoteRecipe
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
        const quoteRecipe = await deleteQuoteRecipe(id)
        response.status(200)
        response.json({
            success:true,
            message: "Receta de cotización eliminada"
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