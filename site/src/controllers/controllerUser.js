const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const bcrypt = require('bcryptjs');
const multer = require('multer');
const User = db.User
const {
    check,
    validationResult,
    body
} = require('express-validator');


let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));

module.exports = {    
    register: function(req, res){
        res.render(path.resolve(__dirname, '..', 'views','users','register'))
    },
    passwordRecovery: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','users','passwordRecovery'));   
    },
    buy: function(req,res){
        let motoAComprar = motos.find(moto => moto.id == req.params.id)
        res.render(path.resolve(__dirname, '..', 'views','users','confirmacionCompra'), {moto:motoAComprar});   
    },
    create: function(req, res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            image: req.file.filename,
            password:bcrypt.hashSync(req.body.password, 10)        
        }
        //return res.send(user)   

        User.create(user)
        .then(()=>res.redirect("/"))
        .catch(err=>res.send(err))
        //return res.send(errors);
    }else{
        if(req.file){fs.unlink(path.resolve(__dirname, '../../public/asset/img/users/'+ req.file.filename),(err) => {
            if (err){console.log(err)};
            //console.log('../../public/asset/img/users/'+ req.file.filename + ' fue borrada');
        });
    }
        return res.render(path.resolve(__dirname, '../views/users/register'), {
        errors: errors.mapped(),  old: req.body
        })
     // return res.send(errors);
      }
   },
    login : (req,res)=>{
    let errors = validationResult(req);
    if(errors.isEmpty()){
        User.findOne({where:{email:req.body.email}})
            .then(user => {
            let userLogueado = user;
            delete userLogueado.password;
            req.session.user = userLogueado;
            if(req.body.rememberme){
                //Crear la cookie de ese usuario
                res.cookie('email', userLogueado.email, {maxAge: 1000 * 60 * 60 * 24} )
              }
           res.redirect('/');
        })
            .catch(err => res.send(err));
    }else{
       
        return res.render(path.resolve(__dirname, '../views/web/index'), {
            errors: errors.mapped(),  old: req.body,
            motos
            })
    }
   },
   logOut: (req,res) => {
       delete req.session.user;
       if(res.cookie.email){
           delete res.cookie.email
       }
       res.redirect('/');
   }
}
