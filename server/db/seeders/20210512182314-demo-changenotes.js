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
      'changenotes',
      [
        {
          id: 1,
          screenshot_attachment: '/www/amaizing_file1.png',
          html_attachment: '/www/amaizing_html_file1.html',
          check_datetime: new Date(),
          rule_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          screenshot_attachment: '/www/amaizing_file2.png',
          html_attachment: '/www/amaizing_html_file2.html',
          check_datetime: new Date(),
          rule_id: 2,
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
    await queryInterface.bulkDelete('changenotes', null, {})
  },
}
