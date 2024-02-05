module.exports = {
  development: {
    username: process.env.username_dev,
    password: process.env.password_dev,
    database: process.env.database_dev,
    host: process.env.host_dev,
    dialect: process.env.dialect_dev,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.username_prod,
    password: process.env.password_prod,
    database: process.env.database_prod,
    host: process.env.host_prod,
    dialect: process.env.dialect_prod,
  },
};
