const db = require('../../database/models')
const User = db.User
const {
    check,
    validationResult,
    body
} = require('express-validator');
const controllerUser = require('../../controllers/controllerUser');

module.exports = [
    check('firstName').isLength({
        min: 1
      }).withMessage('El campo nombre no puede estar vacío'),
    check('lastName').isLength({min: 1
      }).withMessage('El campo apellido no puede estar vacío'),
    check('email').isEmail().withMessage('Agregar un email válido'),
    //Aquí incoporé otras validaciones, para que las tengan de guía en sus proyectos
    //Aquí valido si el usuario ya está registrado en nuestro archivo JSON, esta es una forma
    body('email').custom( (value) =>{  
        User.findAll()   
        .then(function(usuariosEncontrados) {
            usuariosEncontrados.forEach(usuario => {
                if (usuario.email == value) {
                    return true    //Si esto se cumple entonces muestra el mensaje de error
                }
                return false
            })
         
        return console.log(usuariosEncontrados)
        })
        .catch(err=>console.log(err))
        //let usuario=usuarioEncontrado
         //De no encontrase el email entonces no muestra el mensaje de error
    }).withMessage('El email ya se encuentra registrado...'),
    //Aquí valido el Password   
    check('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
    //Aquí valido la confimación del password dispuesto por el usuario
    check('confirmPassword').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),
    //Aquí valido si las contraseñas son iguales o no
    //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
    //El valor { req } corresponde a lo que viene desde el formulario
    body('confirmPassword').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true    // Si yo retorno un true  no se muestra el error     
        }else{
            return false   // Si retorno un false si se muestra el error
        }    
    }).withMessage('Las contraseñas deben ser iguales')   
    
]