const path = require('path');
const fs = require('fs')

module.exports = {

    add: (req,res) =>{
        res.render(path.resolve(__dirname, '..', 'views','admin','productAdd'));
    },
     edit: (req,res) =>{
    
       res.render(path.resolve(__dirname,'..','views','admin','edit'));
     },
     administrar: (req,res) =>{
        res.render(path.resolve(__dirname,'..','views','admin','administrar'));

     }
    

    
}
