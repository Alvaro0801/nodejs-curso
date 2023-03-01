const {Router}=require("express")
const CourseRouter=Router();
const con=require("../config/db")
CourseRouter.route('/cursos')
.get(async(req,res)=>{
    const [rows]=await con.query("SELECT * FROM contacto");
    res.send(JSON.stringify(rows))
})
.post((req,res)=>{

})
module.exports=CourseRouter
