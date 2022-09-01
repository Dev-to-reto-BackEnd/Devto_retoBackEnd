const {createRecipeMaterials, updateRecipeMaterials, deleteRecipeMaterials, getRecipeMaterials} = require("../usecases/recipe-materials.usecase")
const express = require("express")
const authMiddleware = require("../middlewares/auth.middlewares")

const router = express.Router()

//Middleware de auth
router.use(authMiddleware)

router.post("/", async(request, response) =>{
    try{
        const recipe = await createRecipeMaterials(request.body)
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

router.patch("/:id", async (request, response)=>{
    const {id}= request.params
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

router.delete("/:id", async(request, response)=>{
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

router.get("/", async (request, response) => {
    try {
      const material = await getRecipeMaterials()
      response.json({
        material
      })
    }catch(error) {
      response.status(error.status || 500)
      response.json({
        success: true,
        message: error.message
      })
    }
  })

module.exports = router