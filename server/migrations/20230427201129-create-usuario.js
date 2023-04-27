'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      rua: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      bairro: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true,
      },
      dataNascimento: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      etnia: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      estadoCivil: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      dependentes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rendaFamiliar: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      telefoneRecado: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      objetivo: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      login: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      horta: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      cargoId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          model: 'Cargos',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('Cargos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
    await queryInterface.dropTable('Cargos');
  }
};