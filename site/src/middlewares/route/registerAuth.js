const path = require('path');
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
    //Aquí valido el Password       
    check('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
    //Aquí valido la confimación del password dispuesto por el usuario
    check('confirmPassword').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),
    //Aquí valido si las contraseñas son iguales o no
    //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
    //El valor { req } corresponde a lo que viene desde el formulario
    //check('email').custom( async value => Array.from( await User.findAll()).filter(user => user.email == value).length == 0 ? true: false).withMessage('lololo'),
    body('confirmPassword').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true    // Si yo retorno un true  no se muestra el error     
        }else{
            return false   // Si retorno un false si se muestra el error
        }    
    }).withMessage('Las contraseñas deben ser iguales'), 
    body('email').custom(async value => Array.from(await User.findAll()).filter(usuario => usuario.email == value).length > 0 ? Promise.reject("Usuario Existente"): true),
    body('avatar').custom((value, {req}) =>{
        if(req.file != undefined){
            return true
        }
        return false;
    }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG'),
    body('avatar').custom((value, {req}) =>{
        //console.log(req.file.filename);
        let ext = path.extname(req.file.filename).toLowerCase()
        switch (ext) {
            case '.jpg':
                return true;
            case '.jpeg':
                return true;
            case  '.png':
                return true;
            default:
                return false;
        }
    }).withMessage('El archivo debe ser formato: .JPG o .JPEG o . PNG')
]