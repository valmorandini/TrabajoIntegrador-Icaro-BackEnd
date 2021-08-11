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
    body: {
      type: Sequelize.STRING,
      field: 'cuerpo'
    },
    sender: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'remitente_id'
      },
    addressee: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'destinatario_id'
      },   
    date: {
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