const Quoter = require("../models/quoter.model")
const mongoose = require("mongoose")

const createQuoter= async (data) => {
    const quoterData = Quoter.create(data)
    return quoterData
}

const updateQuoter = async (id, data) => {
    const quoter = await Quoter.findByIdAndUpdate(id, data, {returnDocument:"after"})
    return quoter
}

const deleteQuoter = async (id) => {
    const quoter = await Quoter.findByIdAndDelete(id)
    return "Eliminado"
}

module.exports = {deleteQuoter, updateQuoter, createQuoter}