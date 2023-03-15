const { Router } = require("express");
const CourseRouter = Router();
const courseController = require("../controllers/course");
const {upload}=require("../config/file.upload.curso")
CourseRouter.route("/cursos")
  .get(courseController.getCourses)
  .post(courseController.createCourse);

CourseRouter.route("/cursos/:id").get(courseController.getOneCourse);
CourseRouter.route("/cursos/:id/fotos").post(upload.single('flyer'),courseController.nuevaFoto);
module.exports = CourseRouter;
