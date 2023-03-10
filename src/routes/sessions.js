const {Router}=require("express")
const sessionRouter=Router();
const sessionsController=require("../controllers/sessions")

sessionRouter.route('/sessions').get().post(sessionsController.create).delete(sessionsController.delete);

module.exports=sessionRouter;

