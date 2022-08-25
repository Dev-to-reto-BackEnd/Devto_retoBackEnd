const Material = require("../models/material.model")

const getMaterial = () => {
    return Material.find({})
}

const createMaterial = (data) =>{
    return Material.create(data)
}

const updateMaterial = (id, data) =>{
    return Material.findByIdAndUpdate(id,data,{returnDocument:"after"})
}

const deleteMaterial =  (id)=>{
    return Material.findByIdAndUpdate(id)
    
}

module.exports = {getMaterial, createMaterial, updateMaterial, deleteMaterial}

