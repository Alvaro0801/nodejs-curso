const verifySession=(req,res,next)=>{
    if(!req.session.open)
        res.status(401).send('Usuario no autorizado');

    next()
}

module.exports={verifySession}