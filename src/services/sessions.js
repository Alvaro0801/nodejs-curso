const con=require("../config/db")

const sessionServices={}

sessionServices.create=(correo,contrasenia)=> new Promise(async(resolve, reject) => {
    try {
        const [rows]=await con.query('select validarCredenciales(?,?) as logueado',[correo,contrasenia])
        if(rows[0].logueado==-1) return reject({log:"Usuario no registrado",status:404})
        if (rows[0].logueado==0) return reject({log:"Credenciales incorrectas",status:401})
        if (rows[0].logueado==1) return resolve({log:"Usuario Logueado",status:201});
    } catch (error) {
        console.log(error)
        reject({log:"Error interno del servidor",status:404})
    }
})
module.exports=sessionServices;