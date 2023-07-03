require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;
const databaseUsername = process.env.DATABASE_USERNAME;
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseHost = process.env.DATABASE_HOST;
const databaseDialect = process.env.DATABASE_DIALECT;

module.exports = {
    development: {
        username: "u756113144_junior",
        password: "$2y$11$yMAOYs.L1Qp3Hn6P3kpZ0OblpwIxybYA6I4tQL70BH86qIU48Czkq",
        database: "u756113144_hortaSolidaria",
        host: "sql888.main-hosting.eu",
        dialect: "mysql",
    },
    test: {
        username: "u756113144_junior",
        password: "$2y$11$yMAOYs.L1Qp3Hn6P3kpZ0OblpwIxybYA6I4tQL70BH86qIU48Czkq",
        database: "u756113144_hortaSolidaria",
        host: "sql888.main-hosting.eu",
        dialect: "mysql",
    },
    production: {
        username: "u756113144_junior",
        password: "$2y$11$yMAOYs.L1Qp3Hn6P3kpZ0OblpwIxybYA6I4tQL70BH86qIU48Czkq",
        database: "u756113144_hortaSolidaria",
        host: "sql888.main-hosting.eu",
        dialect: "mysql",
    
  },
};
