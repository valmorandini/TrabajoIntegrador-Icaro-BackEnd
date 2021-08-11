const CiudadModel = require('../models/ciudadModel')
const error = require("../common/error")
const exceptions = require("../common/exceptions")


const getAllService = async (query) =>{
  console.log("getAll - query["+ JSON.stringify(query)+"]");
  const ciudades = await CiudadModel.findAll();
  console.log("get ciudades service "+ciudades)
  return ciudades;
}

const getById = async (ciudadId) =>{
  console.log("get by id - ciudadId["+ ciudadId+"]");
  const ciudad = await CiudadModel.findByPk(ciudadId);
  console.log("get ciudad service "+ciudad)
  if(!ciudad){
      throw new error.AppError(exceptions.exceptionType.ciudad.notFound)
  }
  return ciudad;
}

module.exports = {
  getAllService,
  getById,
}