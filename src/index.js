const express = require("express");
const { compile } = require("morgan");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
app.use(morgan("dev"));
app.use(express.json());
app.set("PORT", process.env.PORT || 3000);

let estudiantes = [
  { codigo: "2013-464123", nombre: "Juan" },
  { codigo: "2018-451123", nombre: "Alejandro" },
  { codigo: "2021-123123", nombre: "Jorge" },
  { codigo: "2020-162333", nombre: "Richard" },
  { codigo: "2012-123243", nombre: "Yerson" },
];

app.get("/", (req, res) => {
  res.send("<h1>First Page</h1>");
});

app.get("/home", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/prueba", (req, res) => {
  res.json({ nombre: "Alvaro" });
});

app.get("/estudiantes", (req, res) => {
  // console.log(req.query);
  if (!req.query.codigo) return res.status(200).send(estudiantes);

  let codeStudent = req.query.codigo;
  let codigos = estudiantes.map((estudiante) => estudiante.codigo);
  let i = codigos.indexOf(codeStudent);

  if (i != -1) return res.send(estudiantes[i]);
  res.sendStatus(404);
});

app.post("/estudiantes", (req, res) => {
  console.log("Body: ", req.body);

  if (!req.body.codigo || !req.body.nombre) res.sendStatus(400);

  let nuevoEstudiante = {
    codigo: req.body.codigo,
    nombre: req.body.nombre,
  };

  let codigo = estudiantes.map((estudiante) => estudiante.codigo);

  let i = codigos.indexOf(nuevoEstudiante.codigo);
  if (i != -1) res.sendStatus(409);

  estudiantes.push(nuevoEstudiante);
  res.sendStatus(201);
});

//actividad

let animals = [
  {
    nombre: "Perro",
  },
  {
    nombre: "Oso",
  },
  {
    nombre: "Gato",
  },
  {
    nombre: "Caballo",
  },
  {
    nombre: "Sapo",
  },
  {
    nombre: "Cordero",
  },
  {
    nombre: "Vaca",
  },
];

app.get("/animals", (req, res) => {
  if (!req.query.nombre) return res.send(animals);

  let nuevoAnimal = { nombre: req.query.nombre };

  let animal = animals.find(
    ({nombre}) => nombre.toLowerCase() == nuevoAnimal.nombre.toLowerCase()
  );
  if (animal == undefined) return res.sendStatus(404);
  res.send(animal);
});


app.get("/animals/:nombre",(req,res)=>{
    if(!req.params.nombre) return res.send(animals)

    let nuevoAnimal = { nombre: req.params.nombre };

    let animal = animals.find(
    ({nombre}) => nombre.toLowerCase() == nuevoAnimal.nombre.toLowerCase()
    );
    if (animal == undefined) return res.sendStatus(404);
    res.send(animal);
})
app.post("/animals", (req, res) => {
  if (!req.body.nombre) return res.sendStatus(422);
  let nuevoAnimal ={
    nombre: req.body.nombre,
  };

  let animal = animals.find(
    ({nombre}) => nombre.toLowerCase() == nuevoAnimal.nombre.toLowerCase()
  );
  if (animal != undefined) return res.sendStatus(409);

  animals.push(nuevoAnimal);
  res.sendStatus(201);
});
app.get("/*", (req, res) => {
  res.send("<h1>Page Not Found 404! </h1>");
});
app.listen(app.get("PORT"), () => {
  console.log(`Server running at port ${app.get("PORT")}`);
});
