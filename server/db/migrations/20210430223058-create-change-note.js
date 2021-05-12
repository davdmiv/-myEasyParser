'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('changenotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      screenshot_attachment: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      html_attachment: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      check_datetime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rule_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'rules',
          },
          key: 'id',
        },
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('changenotes')
  },
}
