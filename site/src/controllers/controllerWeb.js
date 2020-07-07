const path = require('path');
const fs = require('fs');

module.exports = {
    index: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','web','index.html'));        
    },
    nosotros: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','web','nosotros.html'));          
    },
    sucursales: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','web','sucursales.html')); 
               
    },
    contacto: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','web','contacto.html'));       
    },
     
   }
 
   


