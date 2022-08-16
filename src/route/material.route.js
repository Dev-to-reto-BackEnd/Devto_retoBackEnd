const {createMaterial, updateMaterial, deleteMaterial} = require("../usecases/material.usecase")

const express = require("express")
const router = express.Router()

router.post("/material", async (request, response)=>{
    try{
        const material = await createMaterial()
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

router.patch("/material/:id", async (request, response)=>{
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

router.delete("/material/:id", async(request, response)=>{
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