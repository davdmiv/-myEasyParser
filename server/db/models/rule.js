'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.ChangeNote, {
        foreignKey: {
          name: 'rule_id',
          allowNull: false,
        },
        as: 'changenotes',
      })
      this.belongsTo(models.User, {
        foreignKey: {
          name: 'user_id',
          allowNull: false,
        },
      })
    }
  }
  Rule.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      shrub_rule: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shrub_cache: {
        type: DataTypes.STRING,
      },
      frequency: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      page_type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'static',
      },
      page_changed: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      last_check: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '',
      },
      activate_cnt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Rule',
      underscored: true,
      tableName: 'rules',
    }
  )
  return Rule
}
