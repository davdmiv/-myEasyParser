'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_rules',
      [
        {
          user_id: 1,
          rule_id: 1,
          privilege_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          rule_id: 2,
          privilege_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          rule_id: 5,
          privilege_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          rule_id: 3,
          privilege_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          rule_id: 6,
          privilege_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          rule_id: 4,
          privilege_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          rule_id: 7,
          privilege_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // подписки
        {
          user_id: 2,
          rule_id: 1,
          privilege_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          rule_id: 1,
          privilege_id: 1, // Владелец - может изменять правло 1
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          rule_id: 6,
          privilege_id: 1, // Владелец - может изменять правло 6
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_rules', null, {})
  },
}
