const con=require("../config/db")
let personServices={}

personServices.getPersons=async(tipo='')=>new Promise(async(resolve, reject) => {
    try {
        if(tipo.length==0){
            const [rows]=await con.query("call listarPersonas()");
            console.log(rows)
            return resolve(rows[0])
        }
        let query=''
        switch (tipo.toLowerCase()) {
            case 'estudiante':
                query='listarEstudiantes()'
                break;
            case 'docente':
                query='listarDocentes()'
                break;
            case 'usuario':
                query='listarUsuarios()'
                break;
            default:
                return reject({log:"No se encontro estudiantes con ese tipo",status:404})
        }
        const [personas]=await con.query(`call ${query}`);
        resolve(personas[0])
    } catch (error) {
        console.log(error)
        reject({log:error,status:500})
    }
})

personServices.createPersons=async(persona)=>
    new Promise(async(resolve, reject) => {
        if(!persona.nombre) return reject({status:400, log:'Falto el campo nombre'})
        if(!persona.apellido1) return reject({status:400, log:'Falto el campo apellido1'})
        if(!persona.apellido2) return reject({status:400, log:'Falto el apellido1'})
        if(!persona.dni) return reject({status:400, log:'Falto el campo dni'})
        if(!persona.correo) return reject({status:400, log:'Falto el campo correo'})
        if(!persona.celular) reject({status:400, log:'Falto el campo celular'})
        console.log("se creo")
        const {nombre,apellido1,apellido2,dni,correo,celular}=persona;
        try {
            const [resp]=await con.query('select registrarPersona(?,?,?,?,?,?) as ok',[nombre,apellido1,apellido2,dni,correo,celular]);
            console.log(resp)
            if(resp[0]["ok"]==1){
                resolve({status:201,log:"Persona created"});
            }else{
                reject({log:"Conflicto de datos",status:409})
            }
            
        } catch (error) {
            console.log(error)
            reject({log:"Error en el servidor",status:500})
        }
        
    })
module.exports=personServices