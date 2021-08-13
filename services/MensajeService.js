const MensajeModel = require('../models/mensajeModel')
const error = require("../common/error")
const exceptions = require("../common/exceptions")


const getAllService = async ({remitente_id, destinatario_id}) =>{
  console.log("getAll - remitente id:"+remitente_id +"- destinatario id:"+destinatario_id);
  const where = {estado: "activo"}
  if(remitente_id){
    where.remitente_id = remitente_id;
  }
  if(destinatario_id){
    where.destinatario_id = destinatario_id;
  }
  const msjs = await MensajeModel.findAll({where:where});
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
  console.log("Update status (eliminado) - msjId["+ msjId+"]");
  try {
    return await MensajeModel.update({estado: "eliminado"},{
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
