const multer=require("multer");
const fs=require("fs")
const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'img');
    },
    filename:(req,file,cb)=>{
        if(req.params.id && req.session.open)
            cb(null,'curso-'+req.params.id+'.png')
        else cb(null,'toDelete')
    }
})

const upload=multer({storage:storage});

module.exports={
    upload,
    cleanTemporaryFile:()=>{
        fs.unlink('img/toDelete',()=>{})
    }
};
