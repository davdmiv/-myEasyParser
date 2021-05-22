'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dynamic_rules_limit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
      },
      static_rules_limit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5,
      },
      dynamic_rules_owner: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      static_rules_owner: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      nikname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'noname',
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
    await queryInterface.dropTable('users')
  },
}
