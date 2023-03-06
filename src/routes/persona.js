const {Router}=require("express")
const Persona=Router();
const personaController=require("../controllers/persona")
Persona.route('/personas')
.get(personaController.getPersons)
.post(personaController.createPersona)
module.exports=Persona
