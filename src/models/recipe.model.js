const mongoose = requiere ("mongoose")

const recipeSchema = new mongoose.Schema({
    SKU : {
        type: id,
        required: true,
        maxLength: 10,
    },
    name : {
        type: string,
        required: true,
        minLength: 3
    },
    unit:{
        type: string,
        required: true,
        maxLength: 10
    },
    lastUpdate:{
        type: date
    },
    createdAt:{
        type:date
    },
    tags:{
        type: Array,
        required:true
    },
    type:{
        type: string,
        required: true, //operative, work, equipment, outsoucing, people, etc
    }
})

const Recipe = mongoose.model ("recipes", recipeSchema)

module.exports = Recipe