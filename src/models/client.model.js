const mongoose = require("moongose")

const clientSchemma = new mongoose.Schema({
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
    phone:{
        type: number,
        required: true, 
        minLength: 10
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
        type:date
    }
})


const Client = mongoose.model("clients", clientSchemma)

module.exports= Client