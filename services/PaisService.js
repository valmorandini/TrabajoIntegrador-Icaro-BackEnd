const PaisModel = require('../models/paisModel')
const error = require("../common/error")
const exceptions = require("../common/exceptions")


const getAllService = async (query) =>{
  console.log("getAll - query["+ JSON.stringify(query)+"]");
  const paises = await PaisModel.findAll();
  console.log("get paises service "+paises)
  return paises;
}

const getById = async (paisId) =>{
  console.log("get by id - paisId["+ paisId+"]");
  const pais = await PaisModel.findByPk(paisId);
  console.log("get pais service "+pais)
  if(!pais){
      throw new error.AppError(exceptions.exceptionType.pais.notFound)
  }
  return pais;
}

module.exports = {
  getAllService,
  getById,
}