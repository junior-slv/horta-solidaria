'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('Enderecos', {
                id_endereco: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                rua: {
                    type: Sequelize.STRING
                },
                numero: {
                    type: Sequelize.STRING
                },
                bairro: {
                    type: Sequelize.STRING
                },
                complemento: {
                    type: Sequelize.STRING,
                },
                cidade: {
                    type: Sequelize.STRING
                },
                pais: {
                    type: Sequelize.STRING
                },
                cep: {
                    type: Sequelize.STRING
                },
                estado: {
                    type: Sequelize.STRING
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('Enderecos');
        });
    }
};
//# sourceMappingURL=20230625050325-create-endereco.js.map