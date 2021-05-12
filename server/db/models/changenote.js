'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ChangeNote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Rule, {
        foreignKey: {
          name: 'rule_id',
          allowNull: false,
        },
      })
    }
  }
  ChangeNote.init(
    {
      screenshot_attachment: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      html_attachment: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      check_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ChangeNote',
      underscored: true,
      tableName: 'changenotes',
    }
  )
  return ChangeNote
}
