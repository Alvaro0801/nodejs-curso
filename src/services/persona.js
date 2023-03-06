const con=require("../config/db")
let personServices={}

personServices.getPersons=async()=>new Promise(async(resolve, reject) => {
    try {
        const [personas]=await con.query("SELECT * FROM persona");
        resolve(personas)
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
        try {
            const [consulta]=await con.query('INSERT INTO persona SET ?',[persona]);
            resolve({status:201,log:"Persona created"});
            
        } catch (error) {
            console.log(error)
            reject({log:"Error en el servidor",status:500})
        }
        
    })
module.exports=personServices