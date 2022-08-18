const {deleteClient, updateClient, createClient, getAll} = require("../usecases/client.usecase")
const express = require("express")
const router = express.Router()

router.get("/", async (request, response) => {
    try{
        const clients = await getAll()
        response.json({
            success:true,
            data: {
                clients
            }
        })
    } catch (err) {
        response.status(err.status || 500)
        response.json({
            success:false,
            message: err.message
        })
    }
})

router.post("/create", async (request, response)=>{
    try{
        const client = await createClient(request.body)
        response.status(201)
        response.json({
            success:true,
            data:{
                client
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
        const client = await updateClient(id, request.body)
        response.json({
            success: true,
            data:{
                client
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
        const client= await deleteClient(id)
        response.json=({
            success: true,
            message : "Cliente eliminado con exito"
        })
    }catch (err){
        response.status=(err.status || 500)
        response.json({
            success:false,
            message: err.message
        })

    }
})

module.exports = router