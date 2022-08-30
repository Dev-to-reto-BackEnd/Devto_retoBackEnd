const mongoose = require("mongoose")

const quoterSchemma = new mongoose.Schema({
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
        match: /^.*@.*\..*$/,  //Que coincida con lo que yo le diga
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true, 
        minLength: 8
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
        type: String,
        required: true,
        minLength: 3
    },
    logo:{
        type:String
    }
})


const Quoter = mongoose.model("quoters", quoterSchemma)

module.exports= Quoter