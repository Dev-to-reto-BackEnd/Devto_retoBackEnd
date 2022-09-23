const Material = require("../models/material.model")

const getByQuoterId=(quoterId) => {
    return Material.find({quoterId})
}

const getMaterial = (id) => {
    return Material.findById(id)
}

const createMaterial = (quoterId, data) =>{
    data.quoterId=quoterId
    return Material.create(data)
}

const updateMaterial = (id, data) =>{
    return Material.findByIdAndUpdate(id,data,{returnDocument:"after"})
}

const deleteMaterial =  (id)=>{
    return Material.findByIdAndDelete(id)
}

module.exports = {getMaterial, createMaterial, updateMaterial, deleteMaterial, getByQuoterId}

