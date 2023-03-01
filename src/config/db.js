const mysql=require("mysql2")
const pool = mysql.createPool({host:'localhost', user: 'usuario',password:"usuario", database: 'agenda',port:"3306"});
const promisePool = pool.promise();

module.exports=promisePool
