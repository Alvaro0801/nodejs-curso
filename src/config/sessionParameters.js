const MySQLStore = require("express-mysql-session");
const dbConfig = require("./dbParameters")
const sessionStore=new MySQLStore(dbConfig)
module.exports = {
  secret: process.env.SESSION_HASH,
  store:sessionStore,
  resave: false,
  saveUninitialized: false,
  rolling:true,
  cookie: { 
    maxAge:1800000
  }
};
