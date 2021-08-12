const UserModel = require('../models/userModel')
const error = require("../common/error")
const exceptions = require("../common/exceptions")


const getAllService = async (query) =>{
  console.log("getAll - query["+ JSON.stringify(query)+"]");
  const users = await UserModel.findAll();
  console.log("get user service "+users)
  return users;
}

const getById = async (userId) =>{
  console.log("get by id - userId["+ userId+"]");
  const user = await UserModel.findByPk(userId);
  console.log("get user service "+user)
  if(!user){
      throw new error.AppError(exceptions.exceptionType.users.notFound)
  }
  return user;
}

const createUser = async (data) => {
  const {nombre_usuario, nombre, apellido, password, ciudad_id } = data
  console.log("Crear mensaje:"+ JSON.stringify({nombre_usuario, nombre, apellido, password, ciudad_id }));
  const mensaje = await MensajeModel.create(data)
  return mensaje.id;
}

module.exports = {
  getAllService,
  getById,
  createUser
}

