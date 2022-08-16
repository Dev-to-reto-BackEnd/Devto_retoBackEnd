const createError = require("http-errors")
const Material = require("../models/material.model")

const createMaterial = async(data) =>{
    const materialData = Material.create(data)
    return materialData
}

const updateMaterial = async (id, data) =>{
    const material = await Material.findByIdAndUpdate(id,data,{returnDocument:"after"})
    return material
}
const deleteMaterial = async (id, data)=>{
    const material = await Material.findByIdAndUpdate(id,data)
    return "Eliminado"
}

module.exports = {createMaterial, updateMaterial, deleteMaterial}

