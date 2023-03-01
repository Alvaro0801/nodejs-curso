const {Router}=require("express")
const Profesor=Router();
const {profesor}=require("../data")

Profesor.route("/profesor").get((req,res)=>{
    res.send(profesor)
}).post((req,res)=>{
    const {nombre}=req.body;

    profesor.push({nombre});
    return res.sendStatus(201)
    
})

module.exports=Profesor