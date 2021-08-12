const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const CiudadModel = sequelizeConnection.define(
  'ciudades',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ciudad_id'
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'nombre'
    },
    pais_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'pais_id'
      }
  },
  {
    tableName: 'ciudad',
    timestamps: false
  }
)
module.exports = CiudadModel