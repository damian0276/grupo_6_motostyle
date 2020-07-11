const path = require('path');
const fs = require('fs');

module.exports = {
    index: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','web','index'));        
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
 
   


