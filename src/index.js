const express=require("express");
const morgan = require("morgan");
const app=express();
require('dotenv').config();
app.use(morgan("dev"));
app.use(express.json());
app.set('PORT',process.env.PORT||3000);


let estudiantes=[
    {codigo:"2013-464123",nombre:"Juan"},
    {codigo:"2018-451123",nombre:"Alejandro"},
    {codigo:"2021-123123",nombre:"Jorge"},
    {codigo:"2020-162333",nombre:"Richard"},
    {codigo:"2012-123243",nombre:"Yerson"}
];

app.get('/',(req,res)=>{
    res.send("<h1>First Page</h1>");
})

app.get('/home',(req,res)=>{
    res.send("<h1>Home</h1>");
})

app.get('/prueba',(req,res)=>{
    res.json({nombre:"Alvaro"});
})


app.get('/estudiantes',(req,res)=>{
    // res.json(estudiantes);
    // console.log(req.query);

    let codeStudent=req.query.codigo;
    let resType=estudiantes.every(estudiante=>{
        let exist=estudiante.codigo==codeStudent;
        if(exist) res.send(estudiante)
        return !exist;    })

    if(resType) res.sendStatus(404);
})

app.post('/estudiantes',(req,res)=>{
    console.log("Body: ",req.body);
    const {codigo,nombre}=req.body;
    estudiantes.push({codigo,nombre});
    res.sendStatus(201);
})
app.get('/*',(req,res)=>{
    res.send("<h1>Page Not Found 404! </h1>")
})
app.listen(app.get('PORT'),()=>{
    console.log(`Server running at port ${app.get('PORT')}`);
})
