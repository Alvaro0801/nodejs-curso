let courseController={}
const courseServices=require("../services/course")
const {cleanTemporaryFile}=require("../config/file.upload.curso")
courseController.createCourse=(req,res)=>{
    courseServices.create(req.body.nombre).then(success=>{
        res.status(success.status).send(success.log)
    })
}
courseController.getCourses=(req,res)=>{
    courseServices.getCourses(req.query.nombre).then(courses=>{
        res.status(201).send(courses)
    }).catch(err=>{
        res.status(err.status).send(err.log)
    })
}
courseController.getOneCourse=(req,res)=>{
    courseServices.getOneCourse(req.params.id).then(course=>{
        res.status(201).send(course)
    }).catch(err=>{
        res.status(err.status).send(err.log)
    })
}

courseController.nuevaFoto=(req,res)=>{
    if(req.session.open){
        if(req.params.id)
            courseServices.nuevaFoto(req.params.id).then(success => res.status(success.status).send(success.log)).catch(err=> res.status(err.status).send(err.log))
        else res.status(400).send('Es necesario especificar un recurso');    
    }else{
        cleanTemporaryFile();
        res.status(401).send('Es necesario autenticarse')
    }
}

module.exports=courseController