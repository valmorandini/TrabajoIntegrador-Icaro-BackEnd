const CiudadService = require("../services/CiudadService");

const getAll = async (req, res) => {
    const query = req.query
    const ciudades = await CiudadService.getAllService(query)
    console.log("get all controller - query: " + JSON.stringify(query))
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