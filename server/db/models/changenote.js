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
      screenshot_attachment: DataTypes.TEXT,
      html_attachment: DataTypes.TEXT,
      check_datetime: DataTypes.DATE,
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
