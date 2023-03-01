const {Router}=require("express")
const Universidad=Router();
const {universidad}=require("../data")

Universidad.route("/universidad").get((req,res)=>{
    res.send(universidad)
}).post((req,res)=>{
    if(!req.body.nombre || !req.body.nombre){
        res.sendStatus(400)
    }
    const {nombre,acronimo}=req.body;

    universidad.push({nombre,acronimo});
    return res.sendStatus(201)
    
})

module.exports=Universidad