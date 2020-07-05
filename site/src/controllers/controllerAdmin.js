const path = require('path');
const fs = require('fs')

module.exports = {

    add: (req,res) =>{
        res.sendFile(path.resolve(__dirname, '..', 'views','admin','productAdd.html'));
    },
     edit: (req,res) =>{
    
       res.sendFile(path.resolve(__dirname,'..','views','admin','edit.html'));
     },
     administrar: (req,res) =>{
        res.sendFile(path.resolve(__dirname,'..','views','admin','administrar.html'));

     }

    
}
