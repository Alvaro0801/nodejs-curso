const mysql = require("mysql2");
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "usuario",
  password: process.env.DB_PASS || "usuario",
  database: process.env.DB_DATABASE || "schoolXD",
  port: process.env.DB_PORT || "3306",
});
const promisePool = pool.promise();

module.exports = promisePool;
