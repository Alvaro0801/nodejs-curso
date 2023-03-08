const sessionsController={};
const sessionServices=require("../services/sessions");
sessionsController.create=(req,res)=>{
    if(!req.session.open){
        sessionServices.create(req.body.correo,req.body.contrasenia).then(success =>{
            req.session.open=true;
            res.status(success.status).send(success.status);
        }).catch(err=>{ res.status(err.status).send(err.log)})
    }
}

module.exports=sessionsController