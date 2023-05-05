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
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mysql",
    
  },
};
