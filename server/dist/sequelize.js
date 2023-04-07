"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map