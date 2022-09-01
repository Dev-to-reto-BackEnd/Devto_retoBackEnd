const {deleteQuoter, updateQuoter, createQuoter, getAll, getById} = require("../usecases/quoter.usecase")
const express = require("express")
const authMiddleware = require("../middlewares/auth.middlewares")

const router = express.Router()

//Middleware de auth
// router.use(authMiddleware)

router.post("/", async (request, response)=>{
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

router.patch("/:id", authMiddleware, async (request, response) => {
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

router.delete("/:id", authMiddleware, async(request, response) => {
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

router.get("/", authMiddleware, async (request, response) => {
    try{
        const quoters = await getAll()
        response.json({
            success:true,
            data: {
                quoters
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

// router.get("/detail",  async (request, response) => {
//     console.log("request en la ruta", request.userId)
//     console.log("EStamos en detalle")
//     try{
//         const quoter = await getById(request.userId)
//         response.json({
//             success:true,
//             data: {
//                 quoter
//             }
//         })
//     } catch (err) {
//         response.status(err.status || 500)
//         response.json({
//             success:false,
//             message: err.message
//         })
//     }
// })

module.exports = router