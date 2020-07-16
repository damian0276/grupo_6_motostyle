const path = require('path');
const fs = require('fs');

let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));

module.exports = {
    index: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','web','index'), {motos});        
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
 
   


