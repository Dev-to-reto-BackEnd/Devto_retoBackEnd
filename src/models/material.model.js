const mongoose = require ("mongoose")

const materialSchemma = new mongoose.Schema({
    name:{
        type: string,
        required: true,
        minLength:3,
    },
    unit:{
        type: string,
        required: true,
        maxLength: 10,
    },
    supplier:{
        type: string,
        required:true,
        minLength: 3,
    },
    brand:{
        type: string,
        required:true,
        minLength: 3,
    },
    price:{
        type: number,
        required:true,
    },
    tags:{
        type: array,
        required: true
    },
    createdAt:{
        type:date
    }

})

const Material = mongoose.model("materials", materialSchemma)

module.exports= Material