const {createQuote, updateQuote, deleteQuote} = require("../usecases/quote.usecase")
const express = require("express")
const router = express.Router()

router.post("/create", async(request, response) =>{
    try{
        const quote = await createQuote(request.body)
        response.json({
            success:true,
            data:{
                quote
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
        const quote = await updateQuote(id, request.body)
        response.json({
            success:true,
            data:{
                quote
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
        const quote = await deleteQuote(id)
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