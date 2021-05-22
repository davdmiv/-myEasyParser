'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'rules',
      [
        {
          id: 1,
          name: 'google-parser',
          url: 'http:\\\\www.google.com',
          shrub_rule: 'div',
          shrub_cache: '',
          frequency: new Date(),
          page_type: 'static',
          page_changed: null,
          last_check: null,
          duration: null,
          public_status: true,
          description: '',
          activate_cnt: 0,
          activate_status: true,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'yandex-parser',
          url: 'http:\\\\www.yandex.ru',
          shrub_rule: 'div',
          shrub_cache: '',
          frequency: new Date(),
          page_type: 'static',
          page_changed: null,
          last_check: null,
          duration: null,
          public_status: false,
          description: '',
          activate_cnt: 0,
          activate_status: true,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
    await queryInterface.sequelize.query(
      `select setval('rules_id_seq', (select max(id) from rules), true);`
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rules', null, {})
  },
}
