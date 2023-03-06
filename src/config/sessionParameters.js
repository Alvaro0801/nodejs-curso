const MySQLStore = require("mysql-express-session");
const dbConfig = require("./dbParameters")
const sessionStore=new MySQLStore(dbConfig)
module.exports = {
  secret: process.env.SESSION_HASH,
  store:sessionStore,
  resave: false,
  saveUninitialized: true,
  rolling:true,
  cookie: { 
    maxAge:180000
  }
};
