const path = require('path');
const db = require('../../database/models')
const User = db.User
const bcrypt = require('bcryptjs');

const {
    check,
    validationResult,
    body
} = require('express-validator');




module.exports = [
    body('email').custom((value,{req}) => {
        return User.findOne({where:{email:value}}).then(user => {
          if (!user ) {
            return Promise.reject('Credenciales Inválidas');            
          } 
        });
         
      })
    //   body('email').custom((value,{req}) => {
    //     return User.findAll().then(users => {
    //      Array.from(users).filter(usuario => usuario.email == value && bcrypt.compareSync(req.body.password,usuario.password)).length == 0 ? Promise.reject("Credenciales Inválidas") : true
         
    //     });
         
    //   })


    //  body('email').custom(async (value,{req}) => Array.from(await User.findAll()).filter(usuario => usuario.email == value && bcrypt.compareSync(req.body.password,usuario.password)).length > 0 ? Promise.reject("Credenciales Inválidas") : true),

    //  check('email').isLength({
    //      min: 1
    //    }).withMessage('El campo nombre no puede estar vacío'),
    //    check('password').isLength({
    //      min: 1
    //    }).withMessage('El campo nombre no puede estar vacío'),



]