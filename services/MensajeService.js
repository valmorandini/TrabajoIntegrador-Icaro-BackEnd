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

const create = async (data) => {
  const {cuerpo, remitente_id, destinatario_id, fecha } = data
  console.log("Crear mensaje:"+ JSON.stringify({cuerpo, remitente_id, destinatario_id, fecha }));
  const mensaje = await MensajeModel.create(data)
  return mensaje.id;
}



module.exports = {
  getAllService,
  getById,
  create,
}
