const dbConfig=require("./dbParameters")
console.log(dbConfig)
const mysql = require("mysql2");
const pool = mysql.createPool(dbConfig);
const promisePool = pool.promise();

module.exports = promisePool;
