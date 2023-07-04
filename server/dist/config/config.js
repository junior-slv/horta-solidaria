"use strict";
require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;
const databaseUsername = process.env.DATABASE_USERNAME;
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseHost = process.env.DATABASE_HOST;
const databaseDialect = process.env.DATABASE_DIALECT;
module.exports = {
    development: {
        username: databaseUsername,
        password: databasePassword,
        database: databaseUrl,
        host: databaseHost,
        dialect: databaseDialect,
    },
    test: {
        username: databaseUsername,
        password: databasePassword,
        database: databaseUrl,
        host: databaseHost,
        dialect: databaseDialect,
    },
    production: {
        username: databaseUsername,
        password: databasePassword,
        database: databaseUrl,
        host: databaseHost,
        dialect: databaseDialect,
    },
};
//# sourceMappingURL=config.js.map