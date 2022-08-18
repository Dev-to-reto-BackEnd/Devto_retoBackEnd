const mongoose = require ("mongoose")

const recipeSchema = new mongoose.Schema({
    SKU : {
        type: String ,
        required: true,
        maxLength: 10,
    },
    name : {
        type: String,
        required: true,
        minLength: 3
    },
    unit:{
        type: String,
        required: true,
        maxLength: 10
    },
    lastUpdate:{
        type:String
    },
    createdAt:{
        type: String
    },
    tags:{
        type: Array,
        required:true
    },
    type:{
        type: String,
        required: true, //operative, work, equipment, outsoucing, people, etc
    }
})

const Recipe = mongoose.model ("recipes", recipeSchema)

module.exports = Recipe