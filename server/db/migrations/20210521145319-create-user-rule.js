'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_rules', {
      rule_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'rules',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      privilege_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'privilege',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
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
    await queryInterface.addConstraint('user_rules', {
      fields: ['user_id', 'rule_id'],
      type: 'primary key',
      name: 'user_rules_pkey',
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_rules')
  },
}
