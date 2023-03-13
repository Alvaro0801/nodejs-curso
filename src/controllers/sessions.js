const sessionsController={};
const sessionServices=require("../services/sessions");
sessionsController.create=(req,res)=>{
    if(!req.session.open){
        sessionServices.create(req.body.correo,req.body.contrasenia,process.env.HASH_PASS).then(success =>{
            req.session.open=true;
            return res.status(success.status).send('Sesion Creada');
        }).catch(err=>{ return res.status(err.status).send(err.log)})
    }else{
        res.status(200).send('Sesion ya creada');
    }
}

sessionsController.delete=(req,res)=>{
    if(req.session.open){
        req.session.destroy()
        res.send('Session Eliminada');
    }else res.status(401).send('Usuario no autenticado')
}
module.exports=sessionsController