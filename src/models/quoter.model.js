const mongoose = require("moongose")

const quoterSchemma = new mongoose.Schema({
    firstName: {
        type: string,
        required: true,
        minLength: 3
    },
    lastName: {
        type: string,
        required: true,
        minLength: 3
    },
    email : {
        type: string,
        required: true,
        minLength: 3
    },
    password:{
        type: string,
        required: true, 
        minLength: 8
    },
    isActive :{
        type: Boolean,
    },
    businessName:{
        type: string,
        required: false,
        minLength:5
    },
    RFC:{
        type:string,
        required:true,
        minLength:12,
        maxLength:13
    },
    street: {
        type:string,
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
        type:string,
        required: true
    },
    state:{
        type:string, 
        required: true
    },
    createdAt:{
        type: string,
        required: true,
        minLength: 3
    },
    logo:{
        type:string
    }
})


const Quoter = mongoose.model("quoters", quoterSchemma)

module.exports= Quoter