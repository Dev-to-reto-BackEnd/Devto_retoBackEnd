const Quoter = require("../models/quoter.model")

const getAll= () => {
    return Quoter.find({})
}

const createQuoter= (data) => {
    return Quoter.create(data)
}

const updateQuoter =  (id, data) => {
    return Quoter.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteQuoter = (id) => {
    return Quoter.findByIdAndDelete(id)
}

module.exports = {getAll, deleteQuoter, updateQuoter, createQuoter}