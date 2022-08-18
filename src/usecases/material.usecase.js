const createError = require("http-errors")
const Material = require("../models/material.model")

const getMaterial = async () => {
    const material = await Material.find({})
    return material
}

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

module.exports = {getMaterial, createMaterial, updateMaterial, deleteMaterial}

