const Client = require("../models/client.model")

const getByQuoterId = (quoterId)=> {
    return Client.find({quoterId})
}

const createClient= (quoterId, data) => {
    data.quoterId=quoterId
    return  Client.create(data)
}

const updateClient = (id, data) => {
    return Client.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteClient = (id) => {
    return Client.findByIdAndDelete(id)
}

module.exports = {getByQuoterId, deleteClient, updateClient, createClient}