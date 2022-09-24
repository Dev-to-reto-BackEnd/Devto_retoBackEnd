const {login} = require("../usecases/quoter.usecase")
const express = require("express")
const router = express.Router()

router.post("/", async (request, response) => {
    const {email, password}=request.body

    try{
        const token= await login(email, password)

        response.json({
            success:true,
            data:{
                token
            }
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success:false,
            message:error.message
        })
    }
})

module.exports = router