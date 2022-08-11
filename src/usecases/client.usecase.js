const Client = require("../models/client.model")
const mongoose = require("mongoose")

const createClient= async (data) => {
    const clientData = Client.create(data)
    return clientData
}

const updateClient = async (id, data) => {
    const client = await Client.findByIdAndUpdate(id, data, {returnDocument:"after"})
    return client
}

const deleteClient = async (id) => {
    const client = await Client.findByIdAndDelete(id)
    return "Eliminado"
}

module.exports = {deleteClient, updateClient, createClient}