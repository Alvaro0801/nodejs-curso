const {Router}=require("express")
const Facultad=Router();
const {facultad}=require("../data")

Facultad.route("/facultad").get((req,res)=>{
    res.send(facultad)
}).post((req,res)=>{
    if(!req.body.nombre || !req.body.nombre){
        res.sendStatus(400)
    }
    const {nombre,acronimo}=req.body;

    facultad.push({nombre,acronimo});
    return res.sendStatus(201)
    
})

module.exports=Facultad