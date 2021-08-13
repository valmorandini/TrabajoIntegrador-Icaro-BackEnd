const CiudadService = require("../services/CiudadService");
const error = require("../common/error")
const exceptions = require('../common/exceptions')

const getAll = async (req, res) => {
    const query = req.query
    if(!query.pais_id){
        throw new error.AppError(exceptions.exceptionType.badRequest,"debe colocar id_pais")
    }
    const filter = {pais_id: query.pais_id }
    const ciudades = await CiudadService.getAllService(filter)
    console.log("get all controller - query: " + JSON.stringify(filter))
    res.status(200).json(ciudades)
}

const getById = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const ciudadId = params.id
    const ciudad = await CiudadService.getById(ciudadId);
    console.log("response controller "+ JSON.stringify(ciudad))
    return res.status(200).json(ciudad)
}

module.exports = {
    getAll,
    getById,
}