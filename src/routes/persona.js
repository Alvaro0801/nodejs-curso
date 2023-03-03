const {Router}=require("express")
const Persona=Router();
const con=require("../config/db")
Persona.route('/personas')
.get(async(req,res)=>{
    try {
        const [rows]=await con.query("SELECT * FROM persona");
        res.send(JSON.stringify(rows))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})
.post(async (req,res)=>{
    const persona=req.body;
    if(!persona.nombre) return res.status(400).send('Falto el campo nombre')
    if(!persona.apellido1) return res.status(400).send('Falto el campo apellido1')
    if(!persona.apellido2) return res.status(400).send('Falto el campo apellido2')
    if(!persona.dni) return res.status(400).send('Falto el campo dni')
    if(!persona.correo) return res.status(400).send('Falto el campo correo')
    if(!persona.celular) return res.status(400).send('Falto el campo celular')

    const [rows]=await con.query('INSERT INTO personas SET ?',ñ[persona]);
    res.sendStatus(201);
})
module.exports=Persona
