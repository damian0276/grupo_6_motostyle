const path = require('path');
const fs = require('fs');
const { ERANGE } = require('constants');

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
    } 
}
 