const express=require("express");
const app=express();

app.use(require('./course'))
app.use(require('./students'))
app.use(require('./universidad'))
app.use(require('./facultad'))
app.use(require('./profesor'))
app.get("/", (req, res) => {
  res.send("<h1>First Page</h1>");
});
module.exports=app;