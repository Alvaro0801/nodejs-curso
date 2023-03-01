const {Router}=require("express")
const StudentRouter=Router();
const data=require("../data")

StudentRouter.route('/estudiantes')
.get((req,res)=>{
    res.send(data.estudiantes);
})
.post((req,res)=>{

})
module.exports=StudentRouter