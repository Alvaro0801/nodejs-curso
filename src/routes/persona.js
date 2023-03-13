const {Router}=require("express")
const Persona=Router();
const personaController=require("../controllers/persona")
const {verifySession}=require("../middleware/verifySession")
Persona.route('/personas')
.get(verifySession,personaController.getPersons)
.post(verifySession,personaController.createPersona)
module.exports=Persona
