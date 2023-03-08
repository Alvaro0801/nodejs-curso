const express=require("express");
const app=express();

app.use(require('./sessions'))
app.use(require('./course'))
app.use(require('./persona'))
app.get("/", (req, res) => {
  res.send("<h1>First Page</h1>");
});
module.exports=app;