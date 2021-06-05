'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'roles',
      [
        {
          id: 1,
          name: 'ADMIN',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'USER',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
    await queryInterface.sequelize.query(
      `select setval('roles_id_seq', (select max(id) from roles), true);`
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {})
  },
}
