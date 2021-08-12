const UserService = require("../services/UserService");

const getAll = async (req, res) => {
    const query = req.query
    const users = await UserService.getAllService(query)
    console.log("get all controller - query: " + JSON.stringify(query))
    res.status(200).json(users)
}

const getById = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const userId = params.id
    const user = await UserService.getById(userId);
    console.log("response controller "+ JSON.stringify(user))
    return res.status(200).json(user)
}

const create = async (req,res) => {
    const data = req.body
    console.log("INIT CREATE USER  data:" + JSON.stringify(data))
    const newUser = await UserService.createUser(data);
    console.log(JSON.stringify(newUser))
    return res.status(201).json(newUser)
}

module.exports = {
    getAll,
    getById,
    create
}