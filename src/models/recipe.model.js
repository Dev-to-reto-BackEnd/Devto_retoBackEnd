const mongoose = require ("mongoose")
const {Schema} = mongoose

//Falta agregar las recetas de los materiales en la receta final
const recipeSchema = new mongoose.Schema({
    //nosotros lo generamos
    SKU : {
        type: String ,
        required: true,
        maxLength: 6
    },
    name : {
        type: String,
        required: true,
        minLength: 3
    },
    lastUpdate:{
        type: Date,
        default: ()=> new Date(),
    },
    unit:{
        type: String,
        required: true,
        maxLength: 10
    },
    createdAt:{
        type: Date,
        default: ()=> new Date()
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