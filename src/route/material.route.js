const {getMaterial, createMaterial, updateMaterial, deleteMaterial} = require("../usecases/material.usecase")

const express = require("express")
const router = express.Router()

router.get("/", async (request, response) => {
    try {
      const material = await getMaterial()
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

router.post("/create", async (request, response)=>{
    try{
        const material = await createMaterial(request.body)
        response.json({
            succes:true,
            data:{
                material
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

router.patch("/update/:id", async (request, response)=>{
    const {id} = request.params
    try{
        const material = await updateMaterial(id, request.body)
        response.json({
            success:true,
            data:{
                material
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
        const material = await deleteMaterial(id)
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

module.exports = router