const {Router}=require("express")
const CourseRouter=Router();
const courseController=require("../controllers/course")
const con=require("../config/db")
CourseRouter.route('/cursos')
.get(courseController.getCourses)
.post(courseController.createCourse);

CourseRouter.route("/cursos/:id").get(courseController.getOneCourse)
module.exports=CourseRouter
