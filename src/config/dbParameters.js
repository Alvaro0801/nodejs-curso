module.exports={
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "usuario",
    password: process.env.DB_PASS || "",
    database: process.env.DB_DATABASE || "schoolXD",
    port: process.env.DB_PORT || "3306",
  }