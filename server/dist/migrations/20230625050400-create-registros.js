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
            yield queryInterface.createTable('Registros', {
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
                resposta: {
                    type: Sequelize.TEXT
                },
                fk_Usuario_id: {
                    type: Sequelize.INTEGER
                },
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('Registros');
        });
    }
};
//# sourceMappingURL=20230625050400-create-registros.js.map