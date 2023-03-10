let courseController={}
const courseServices=require("../services/course")
let services=null
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

module.exports=courseController