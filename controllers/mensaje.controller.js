const MensajeService = require("../services/MensajeService");

const getAll = async (req, res) => {
    const query = req.query
    const users = await MensajeService.getAllService(query)
    console.log("get all controller - query: " + JSON.stringify(query))
    res.status(200).json(users)
}

const getById = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const userId = params.id
    const user = await MensajeService.getById(userId);
    console.log("response controller "+ JSON.stringify(user))
    return res.status(200).json(user)
}

module.exports = {
    getAll,
    getById,
}