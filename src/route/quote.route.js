const {createQuote, updateQuote, deleteQuote} = require("../usecases/quote.usecase")
const express = requiere("express")
const router = express.router()

router.post("/quote", async(request, response) =>{
    try{
        const quote = await createQuote()
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

router.patch("/quote/:id", auth, async (request, response)=>{
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

router.delete("/quote/:id", auth, async(request, response)=>{
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