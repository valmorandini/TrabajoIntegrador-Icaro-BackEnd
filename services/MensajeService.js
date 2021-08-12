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
  const dataCreate = 
  { cuerpo: data.cuerpo,
    remitente_id: data.remitente_id,
    destinatario_id: data.destinatario_id,
    fecha: new Date() } 
  console.log("Crear mensaje:"+ JSON.stringify(dataCreate));
  const mensaje = await MensajeModel.create(dataCreate)
  return mensaje.id;
}

const eliminar = async (msjId) => {
  console.log("Delete by id - msjId["+ msjId+"]");
  try {
    return await MensajeModel.destroy({
      where: {mensaje_id: msjId}
    })
  } catch (e) {
    throw new error.AppError(exceptions.exceptionType.mensaje.notFound)
  }
}

module.exports = {
  getAllService,
  getById,
  create,
  eliminar
}
