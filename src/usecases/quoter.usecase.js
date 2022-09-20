const createError=require("http-errors")
const Quoter = require("../models/quoter.model")
const bcrypt= require("bcrypt")
const saltRounds=10
const jwt= require("../lib/jwt.lib") //jwt.sign //jwt.verify

const getAll= () => {
    return Quoter.find({})
}

const createQuoter= async (data) => {
    //Sign up, crear cuenta
    const hash= await bcrypt.hash(data.password, saltRounds)
    data.password= hash
    return await Quoter.create(data)
}

const updateQuoter =  (id, data) => {
    return Quoter.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteQuoter = (id) => {
    return Quoter.findByIdAndDelete(id)
}

const login = async (email, textPlainPassword) => {
    //Validar que exista el cotizador
    const quoter = await Quoter.findOne({email})

    //Falla correo
    if(!quoter) throw createError (400, "Información invalida")

    const isValidPassword= await bcrypt.compare(textPlainPassword, quoter.password)

    //Falla password 
    if (!isValidPassword) throw createError(400,"Información invalida")

    //Haciendo token
    let token=jwt.sign({id: quoter._id, isActive:quoter.isActive})
    console.log("token", token)
    return token
}

module.exports = {getAll, deleteQuoter, updateQuoter, createQuoter, login}