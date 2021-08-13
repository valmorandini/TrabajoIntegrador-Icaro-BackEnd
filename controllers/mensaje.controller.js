const MensajeService = require("../services/MensajeService");
const error = require('../common/error')
const exceptions = require('../common/exceptions')

const getAll = async (req, res) => {
    const query = req.query
    console.log("get all controller - query : "+JSON.stringify(query))
    if(!req.query.remitente_id && !req.query.destinatario_id){
        throw new error.AppError(exceptions.exceptionType.badRequest,"debe colocar un remitente_id o un destinatario_id")
    }
    const filter = {}
    if(req.query.remitente_id){
        filter.remitente_id = req.query.remitente_id
    }
    if(req.query.destinatario_id){
        filter.destinatario_id = req.query.destinatario_id
    }
    const mensajes = await MensajeService.getAllService(filter)
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

const eliminar = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const mensajeId = params.id
    console.log("Delete MSJ data:" + JSON.stringify(params))
    const mensaje = await MensajeService.eliminar(mensajeId);
    console.log(JSON.stringify(mensaje))
    return res.status(200).json(mensaje)

}

module.exports = {
    getAll,
    getById,
    create,
    eliminar
}