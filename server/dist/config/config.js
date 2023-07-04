"use strict";
require('dotenv').config();
// const databaseUrl = ;
// const databaseUsername = ;
// const databasePassword = ;
// const databaseHost = ;
// const databaseDialect = ;
module.exports = {
    development: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_URL,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
    },
    test: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_URL,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
    },
    production: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_URL,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
    },
};
//# sourceMappingURL=config.js.map