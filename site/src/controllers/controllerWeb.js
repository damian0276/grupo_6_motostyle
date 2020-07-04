const path = require('path');
const fs = require('fs')

module.exports = {
    index: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','web','index.html'));        
    },
    contacto: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','web','contacto.html'));   
    },
    register: function(req, res){
        res.sendFile(path.resolve(__dirname, '..', 'views','web','register.html'))
    }

}