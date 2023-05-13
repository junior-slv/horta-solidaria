'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doador: {
        type: Sequelize.STRING
      },
      produto: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Doacaos');
  }
};