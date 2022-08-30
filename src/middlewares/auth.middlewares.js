const jwt= require("../lib/jwt.lib")

const auth = (request, response, next) => {
    const authorization= request.headers.authorization || ""
    try{
        //Quitando Bearer
        const token=authorization.replace("Bearer ", "")

        const verifiedToken= jwt.verify(token)
        console.log("verifiedToken", verifiedToken)

        // request["userId"]=verifiedToken.userId
        // consol.log("request userId", request.userId)

        next()
    }catch(err){
        response.status(err.status || 401)
        response.json({
            success:false,
            error:err.message
        })
    }
  
    //Verificar que el token que el frontend envie sea correcto 
    
}

module.exports=auth