const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const UserModel = sequelizeConnection.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'usuario_id'
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'nombre_usuario'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nombre'
      },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'apellido'
      },   
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'ciudad_id'
      }
  },
  {
    tableName: 'user',
    timestamps: false
  }
)
module.exports = UserModel