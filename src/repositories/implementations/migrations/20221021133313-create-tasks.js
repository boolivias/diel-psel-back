'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      title: {
        type: new Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: new Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: new Sequelize.STRING,
        allowNull: false,
      },
      start_time: {
        type: new Sequelize.INTEGER,
        allowNull: false,
      },
      end_time: {
        type: new Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Tasks');
  }
};
