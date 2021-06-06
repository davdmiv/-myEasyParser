'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          email: 'admin1@mail.com',
          password:
            '$2b$05$RgLzuOqZAVwUKthu2iYvg.M3mr3bNxSby0pJneCeqi3pg6kh8lcdq', //password
          nikname: 'admin 1',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          email: 'user2@mail.com',
          password:
            '$2b$05$RgLzuOqZAVwUKthu2iYvg.M3mr3bNxSby0pJneCeqi3pg6kh8lcdq', //password
          nikname: 'noname 1',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          email: 'user3@mail.com',
          password:
            '$2b$05$RgLzuOqZAVwUKthu2iYvg.M3mr3bNxSby0pJneCeqi3pg6kh8lcdq', //password
          nikname: 'noname 2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          email: 'user4@mail.com',
          password:
            '$2b$05$RgLzuOqZAVwUKthu2iYvg.M3mr3bNxSby0pJneCeqi3pg6kh8lcdq', //password
          nikname: 'noname 3',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          email: 'admin2@mail.com',
          password:
            '$2b$05$RgLzuOqZAVwUKthu2iYvg.M3mr3bNxSby0pJneCeqi3pg6kh8lcdq', //password
          nikname: 'admin 2',
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
