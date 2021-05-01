'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING(1000),
      },
      shrub_rule: {
        type: Sequelize.STRING,
      },
      shrub_cache: {
        type: Sequelize.STRING,
      },
      frequency: {
        type: Sequelize.DATE,
      },
      page_type: {
        type: Sequelize.STRING,
      },
      page_changed: {
        type: Sequelize.DATE,
      },
      last_check: {
        type: Sequelize.DATE,
      },
      duration: {
        type: Sequelize.TIME,
      },
      public: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.TEXT,
      },
      activate_cnt: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rules')
  },
}
