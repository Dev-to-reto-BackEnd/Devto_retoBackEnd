const mongoose = require ("mongoose")

const materialSchemma = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:3,
    },
    unit:{
        type: String,
        required: true,
        maxLength: 10,
    },
    supplier:{
        type: String,
        required:true,
        minLength: 3,
    },
    brand:{
        type: String,
        required:true,
        minLength: 3,
    },
    price:{
        type: Number,
        required:true,
    },
    tags:{
        type: Array,
        required: true
    },
    createdAt:{
        type:Date
    }

})

const Material = mongoose.model("materials", materialSchemma)

module.exports= Material