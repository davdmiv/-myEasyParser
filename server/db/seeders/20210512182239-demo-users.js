'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          email: 'user1@mail.com',
          password: 'password',
          role: 'USER',
          nikname: 'default-seed',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          email: 'user2@mail.com',
          password: 'password',
          role: 'USER',
          nikname: 'default-seed',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
    await queryInterface.sequelize.query(
      `select setval('users_id_seq', (select max(id) from users), true);`
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}
