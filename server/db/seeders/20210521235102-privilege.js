'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'privilege',
      [
        {
          id: 1,
          title: 'Владелец',
          description: 'Право не изменение и удаление',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: 'Подписчик',
          description: 'Право на просмотр и получение уведомлений',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
    await queryInterface.sequelize.query(
      `select setval('privilege_id_seq', (select max(id) from privilege), true);`
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('privilege', null, {})
  },
}
