'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      shrub_rule: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shrub_cache: {
        type: Sequelize.STRING,
      },
      frequency: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      page_type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'static',
      },
      page_changed: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      last_check: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '',
      },
      activate_cnt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
