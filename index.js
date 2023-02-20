const express=require("express");
const router=express();

router.get('/',(req,res)=>{
    res.send("<h1>HOLA MUNDO</h1>");
})

router.listen(3000,()=>{
    console.log('Server running on port 3000');
})