let personaController={}
const personaServices=require("../services/persona")
personaController.getPersons=(req,res)=>{
    console.log(req.session.open)
    personaServices.getPersons(req.query.tipo).then(persona=> res.send(persona)).catch(err=> 
        res.status(err.status).send(err.log)
    )
}

personaController.createPersona=(req,res)=>{
    personaServices.createPersons(req.body).then(persona=> res.status(persona.status).send(persona.log)).catch(
        err=> {
            console.log(err)
            res.status(err.status).send(err.log)}
    )
}

module.exports=personaController