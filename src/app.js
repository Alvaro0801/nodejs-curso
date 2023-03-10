require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const session=require("express-session");
const app = express();
const sessionParameters=require("./config/sessionParameters")
const cors = require('cors');
app.use( cors({origin: 'null'}) ) 
app.use(express.json());
app.use(morgan("dev"));
app.use(session(sessionParameters))
app.use(require('./routes/index.routes'))
app.set("PORT", process.env.PORT || 777);

app.get("/*", (req, res) => {
  res.send("<h1>Page Not Found 404! </h1>");
});
app.listen(app.get("PORT"), () => {
  console.log(`Server running at port ${app.get("PORT")}`);
});
