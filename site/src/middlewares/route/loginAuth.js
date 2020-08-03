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
  body('email').custom((value, {req}) => {
    return User.findOne({where:{email:value}}).then(user => {
      if (user && bcrypt.compareSync(req.body.password,user.password)) {
        return true;            
        } else{
        return Promise.reject('Credenciales Inválidas');
        }
    });
         
  }),
  check('email').isLength({
      min: 1
    }).withMessage('El campo nombre no puede estar vacío'),
  check('password').isLength({
      min: 1
    }).withMessage('El campo nombre no puede estar vacío')
]