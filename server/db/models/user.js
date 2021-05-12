'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Rule, {
        foreignKey: {
          name: 'user_id',
          allowNull: false,
        },
      })
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'USER',
      },
      nikname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: 'User',
      underscored: true,
      tableName: 'users',
    }
  )
  return User
}
