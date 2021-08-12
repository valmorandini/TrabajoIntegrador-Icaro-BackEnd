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
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nombre'
      },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'apellido'
      },   
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ciudad_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'ciudad_id'
      },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
      },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      }  
  },
  {
    tableName: 'user',
    timestamps: true
  }
)
module.exports = UserModel