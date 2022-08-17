const {deleteQuoter, updateQuoter, createQuoter} = require("../usecases/quoter.usecase")
const express = require("express")
const router = express.Router()

router.post("/create", async (request, response)=>{
    try{
        const quoter = await createQuoter(request.body)
        response.status(201)
        response.json({
            success:true,
            data:{
                quoter
            }
        })
    } catch(err){
        response.status(400)
        response.json({
            success:false,
            message:err.message
        })
    }
})

router.patch("/update/:id", async (request, response) => {
    const {id}= request.params
    try{
        const quoter = await updateQuoter(id, request.body)
        response.json({
            success: true,
            data:{
                quoter
            }
        })
    }catch(err){
        response.status(err.status || 400)
        response.json({
            success: false, 
            message:err.message
        })
    }
})

router.delete("/:id", async(request, response) => {
    const {id} = request.params
    try{
        const quoter= await deleteQuoter(id)
        response.json=({
            success: true,
            message : "Cotizador eliminado con exito"
        })
    }catch (err){
        response.status=(err.status || 500)
        response.json({
            success:false,
            message: err.message
        })
    }
})