const dbConfig=require("./dbParameters")
const mysql = require("mysql2");
const pool = mysql.createPool(dbConfig);
const promisePool = pool.promise();

module.exports = promisePool;
