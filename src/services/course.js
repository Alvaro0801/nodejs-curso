let courseServices={}
const con=require("../config/db")
const fs=require("fs")
courseServices.create=(nombre)=>new Promise(async(resolve, reject) => {
    if(!nombre)  return reject({status:400,log:'Falta el campo nombre'});
    const curso={
        nombre
    }
    try {
        await con.query("INSERT INTO curso SET ?",[curso]);
        return resolve({status:201,log:"Course created"});
    } catch (error) {
        console.log(error)
        reject({status:500,log:"Error en el servidor"})
    }
})
courseServices.getCourses=(nombre='')=>new Promise(async(resolve, reject) => {
    try {
        if(nombre.length==0){
            const [rows]=await con.query("call listarCursos()");
            console.log(rows)
            return resolve(rows[0])

        }
        const[rows]=await con.query("call filtrarCursosNombre(?)",[nombre]);
        if(!rows.length>0) return reject({log:"No se encontro el curso",status:404})
        return resolve(rows[0]);
    } catch (error) {
        console.log(error)
        reject({status:500,log:"Error en el servidor"})
    } 
})
courseServices.getOneCourse=(id)=>new Promise(async(resolve, reject) => {
    try {
        const [rows]=await con.query("call listarCurso(?)",[id]);
        resolve(rows[0])
    } catch (error) {
        console.log(error)
        reject({status:500,log:"Error en el servidor"})
    }
})

courseServices.nuevaFoto=(id)=> new Promise(async(resolve, reject) => {
    try {
        const [rows]=await con.query("select existeCurso(?) as result",[id]);
        if(rows[0].result==1){
            return resolve({log:"El archivo se ha guardado con exito",status:201})
        }
        fs.unlink(`img/curso-${id}.png`,err=>{
            if(err){
                reject({status:500,log:"Error en el servidor"})
            }else{
                reject({status:404,log:"El curso especificado no existe"})
            }
        })
    } catch (error) {
        console.log(error)
        reject({status:500,log:"Error en el servidor"})
        
    }
})

module.exports=courseServices