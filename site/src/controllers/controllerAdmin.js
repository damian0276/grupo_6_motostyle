const path = require('path');
const fs = require('fs')

module.exports = {
  motos: function(){ 
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
  },
  guardar: function(data){
    return fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),JSON.stringify(data, null, 2)); 
  },
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
