const MensajeModel = require('../models/mensajeModel')
const error = require("../common/error")
const exceptions = require("../common/exceptions")


const getAllService = async (query) =>{
  console.log("getAll - query["+ JSON.stringify(query)+"]");
  const msjs = await MensajeModel.findAll();
  console.log("get msj service "+msjs)
  return msjs;
}

const getById = async (msjId) =>{
  console.log("get by id - msjId["+ msjId+"]");
  const msj = await MensajeModel.findByPk(msjId);
  console.log("get msj service "+msj)
  if(!msj){
      throw new error.AppError(exceptions.exceptionType.mensaje.notFound)
  }
  return msj;
}

module.exports = {
  getAllService,
  getById,
}
