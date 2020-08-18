const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Product = db.Product



module.exports = {
    index: function(req,res){
        Product.findAll({
            include:['brand', 'image']
        })
            .then(
                bikes =>{
                    //return res.send(bikes)
                    res.render(path.resolve(__dirname, '..', 'views','web','index'),{bikes});
                }
            )
            .catch(err => res.send(err))
               
    },
    nosotros: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','web','nosotros'));          
    },
    sucursales: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','web','sucursales')); 
               
    },
    contacto: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','web','contacto'));       
    },
     
   }
 
   


