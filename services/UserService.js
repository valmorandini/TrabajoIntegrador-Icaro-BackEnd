const UserModel = require('../models/userModel')
const error = require("../common/error")
const exceptions = require("../common/exceptions")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require("config")


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

  const userExist = await UserModel.findOne({where: {userName:data.userName.toLowerCase()}});
    if(userExist){
      throw new error.AppError(exceptions.exceptionType.users.userExists);
    }

  const dataCreate = 
  { userName: data.userName.toLowerCase(),
    nombre: data.nombre,
    apellido: data.apellido,
    password: encryptPassword(data.password),
    ciudad_id: data.ciudad_id,
    createdAt:new Date(),
    updatedAt: new Date() } 
    console.log("Crear user:"+ JSON.stringify(dataCreate));
  try {
      return await UserModel.create(dataCreate)
  } catch (e) {
    const errorMessage = `Create User - Detail: ` + e.message
    // logger.error(errorMessage)
    console.error("createUser - userName["+ dataCreate.userName+"]");
    throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeCreated, errorMessage)
  }
}


const login = async ({userName, password}) => {
  console.log("login - userName["+ userName+"]"+ " - password["+ password+"]" );
  const user = await UserModel.findOne({where: {userName:userName.toLowerCase()}})
  const isMatch = user && (await comparePass(password,user.password))
  if(!isMatch){
    throw new error.AppError(exceptions.exceptionType.users.invalidPassword,"userService.login")
  }
  const token = generateToken(user.id,user.userName)
  return {token}
}

const comparePass = (userPass, hashedPass) => {
  return bcrypt.compare(userPass,hashedPass)
}

const encryptPassword = userPassword => {
  const salt = bcrypt.genSaltSync()
  return bcrypt.hashSync(userPassword, salt)
}

const generateToken = (id,userName)=>{
  return jwt.sign({
    id:id,
    userName:userName, 
  },config.get("auth.secret"),{
    expiresIn: config.get("auth.tokenExpire")
  })
 }


module.exports = {
  getAllService,
  getById,
  createUser,
  login
}

