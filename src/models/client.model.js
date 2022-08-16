const mongoose = require("mongoose")

const clientSchemma = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3
    },
    email : {
        type: String,
        required: true,
        minLength: 3
    },
    phone:{
        type: Number,
        required: true, 
        minLength: 10
    },
    isActive :{
        type: Boolean,
    },
    businessName:{
        type: String,
        required: false,
        minLength:5
    },
    RFC:{
        type:String,
        required:true,
        minLength:12,
        maxLength:13
    },
    street: {
        type:String,
        required:true
    },
    extNumber:{
        type: Number,
        required:true
    },
    intNumber:{
        type: Number,
        required:false
    },
    postalCode:{
        type: Number,
        required:true
    },
    neighborhood:{
        type:String,
        required: true
    },
    state:{
        type:String, 
        required: true
    },
    createdAt:{
        type:Date
    }
})


const Client = mongoose.model("clients", clientSchemma)

module.exports= Client