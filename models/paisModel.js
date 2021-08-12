const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const PaisModel = sequelizeConnection.define(
  'paises',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'pais_id'
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'nombre'
    },
  },
  {
    tableName: 'pais',
    timestamps: false
  }
)
module.exports = PaisModel