const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const MensajeModel = sequelizeConnection.define(
  'mensajes',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'mensaje_id'
    },
    cuerpo: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'cuerpo'
    },
    remitente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'remitente_id'
      },
    destinatario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'destinatario_id'
      },   
    fecha: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'fecha'
    }
  },
  {
    tableName: 'mensaje',
    timestamps: false
  }
)
module.exports = MensajeModel