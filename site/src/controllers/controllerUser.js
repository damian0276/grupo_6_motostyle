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
const { on } = require('process');


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
        .then(()=>res.redirect("/login"))
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
            //console.log('asdasd' + req.body.rememberme);
            // if(req.body.rememberme){
            //     //Crear la cookie de ese usuario
            //     res.cookie('email', userLogueado.email, {maxAge: 1000 * 60 * 60 * 24})
            //     //console.log('asdasd' + ' ' +req.cookies.email);
            //   }
           res.redirect('/');
        })
            .catch(err => res.send(err));
    }else{
       
        return res.render(path.resolve(__dirname, '../views/users/login'), {
            errors: errors.mapped(),  old: req.body,
            motos
            })
    }
   },
   logOut: (req,res) => {
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/');
   },
   profile: function(req, res){
          
    res.render(path.resolve(__dirname, '..', 'views','users','profile')) 
   
   },
   loginViews: function(req, res){
    res.render(path.resolve(__dirname, '..', 'views','users','login'))
   },
   update:function(req, res){
    let updateUser = User.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    adress:req.body.adress,
    dni:req.body.dni,
    telephone:req.body.telephone,
    image: req.file? req.file.filename:req.body.oldAvatar
   },{
        where:{
            id: req.params.id 
        }
    })
    let userToLog = User.findByPk(req.params.id)
    Promise.all([updateUser, userToLog])
    .then(([confirm, user]) => {
        //console.log(user);
        let userLogueado = user;
        delete userLogueado.password;
        res.locals.user = userLogueado;//preguntar a los profes porque no se actualiza el locals
        req.session.user = userLogueado;
        res.render(path.resolve(__dirname, '..', 'views','users','profile'))
    }) //siempre a lo último
    .catch(err => res.send(err))   
   }
   
}
