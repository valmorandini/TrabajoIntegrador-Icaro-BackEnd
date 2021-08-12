const MensajeService = require("../services/MensajeService");

const getAll = async (req, res) => {
    const query = req.query
    const mensajes = await MensajeService.getAllService(query)
    console.log("get all controller - query: " + JSON.stringify(query))
    res.status(200).json(mensajes)
}

const getById = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const mensajeId = params.id
    const mensaje = await MensajeService.getById(mensajeId);
    console.log("response controller "+ JSON.stringify(mensaje))
    return res.status(200).json(mensaje)
}

const create = async (req,res) => {
    const data = req.body
    console.log("INIT CREATE MSJ  data:" + JSON.stringify(data))
    const newMsj = await MensajeService.create(data);
    console.log(JSON.stringify(newMsj))
    return res.status(201).json(newMsj)
}

module.exports = {
    getAll,
    getById,
    create
}