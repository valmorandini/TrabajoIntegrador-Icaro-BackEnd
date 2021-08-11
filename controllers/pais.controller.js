const PaisService = require("../services/PaisService");

const getAll = async (req, res) => {
    const query = req.query
    const paises = await PaisService.getAllService(query)
    console.log("get all controller - query: " + JSON.stringify(query))
    res.status(200).json(paises)
}

const getById = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const paisId = params.id
    const pais = await PaisService.getById(paisId);
    console.log("response controller "+ JSON.stringify(pais))
    return res.status(200).json(pais)
}

module.exports = {
    getAll,
    getById,
}