'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registros', {
      id_registro: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_hora: {
        type: Sequelize.DATE
      },
      endpoint: {
        type: Sequelize.STRING
      },
      metodo: {
        type: Sequelize.STRING
      },
      parametros: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      ip: {
        type: Sequelize.STRING
      },
      resposta: {
        type: Sequelize.TEXT
      },
      fk_Usuario_id: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Registros');
  }
};