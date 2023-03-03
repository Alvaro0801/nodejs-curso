const {Router}=require("express")
const CourseRouter=Router();
const con=require("../config/db")
CourseRouter.route('/cursos')
.get(async(req,res)=>{
    try {
        if(!req.query.nombre){
            const [rows]=await con.query("SELECT * FROM curso");
            return res.send(rows)
        }
        const {nombre}=req.query;
        const[rows]=await con.query("SELECT * FROM CURSO WHERE nombre=?",[nombre]);
        if(!rows.length>0) return res.status(404).send('No se encontro el curso')
        return res.send(rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})
.post(async(req,res)=>{
    const {nombre}=req.body;
    if(!nombre)  return res.status(400).send('Falta el campo nombre');
    const curso={
        nombre
    }
    try {
        const [rows]=await con.query("INSERT INTO curso SET ?",[curso]);
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})
module.exports=CourseRouter
