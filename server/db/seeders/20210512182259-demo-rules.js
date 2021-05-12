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
          status: false,
          description: '',
          activate_cnt: 0,
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
          status: false,
          description: '',
          activate_cnt: 0,
          user_id: 2,
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
    await queryInterface.bulkDelete('rules', null, {})
  },
}
