const express=require("express");
const morgan = require("morgan");
const app=express();
require('dotenv').config();
app.use(morgan("dev"));
app.set('PORT',process.env.PORT||3000);
app.get('/',(req,res)=>{
    res.send("<h1>First Page</h1>");
})

app.get('/home',(req,res)=>{
    res.send("<h1>Home</h1>");
})

app.get('/prueba',(req,res)=>{
    res.json({nombre:"Alvaro"});
})

app.get('/*',(req,res)=>{
    res.send("<h1>Page Not Found 404! </h1>")
})
app.listen(app.get('PORT'),()=>{
    console.log(`Server running at port ${app.get('PORT')}`);
})