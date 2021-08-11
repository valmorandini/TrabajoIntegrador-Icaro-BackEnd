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

module.exports = {
  getAllService,
  getById,
}

