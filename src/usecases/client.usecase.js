const Client = require("../models/client.model")

const getAll= () => {
    return Client.find({})
}

const createClient= (data) => {
    return  Client.create(data)
}

const updateClient = (id, data) => {
    return Client.findByIdAndUpdate(id, data, {returnDocument:"after"})
}

const deleteClient = (id) => {
    return Client.findByIdAndDelete(id)
}

module.exports = {deleteClient, updateClient, createClient, getAll}