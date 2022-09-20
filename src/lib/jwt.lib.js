const jwt = require("jsonwebtoken")

const{JWT_SECRET} =process.env

//Creando el token
const sign= (payload = {}) => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: "7d"})
}

//Verificar que el token este bien 
const verify = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {sign, verify}