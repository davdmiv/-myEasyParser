'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
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
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  },
}
