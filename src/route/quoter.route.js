const quoters = require("../usecases/quoter.usecase")
const {deleteQuoter, updateQuoter, createQuoter} = require("../usecases/quoter.usecase")

const express = require("express")
const router = express.Router()

router.post("/signIn", async (request, response)=>{
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