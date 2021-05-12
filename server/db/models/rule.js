'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ChangeNote, {
        foreignKey: {
          name: 'rule_id',
          allowNull: false,
        },
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
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      shrub_rule: DataTypes.STRING,
      shrub_cache: DataTypes.STRING,
      frequency: DataTypes.DATE,
      page_type: DataTypes.STRING,
      page_changed: DataTypes.DATE,
      last_check: DataTypes.DATE,
      duration: DataTypes.TIME,
      status: DataTypes.BOOLEAN,
      description: DataTypes.TEXT,
      activate_cnt: DataTypes.INTEGER,
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
