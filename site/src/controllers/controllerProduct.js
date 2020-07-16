const path = require('path');
const fs = require('fs')

let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));

module.exports = {
    index: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','products','products'),{motos});
    },
    cart: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','products','productCart'));
    },
    detail: function(req,res){
        let motoAMostrar = motos.find(moto => moto.id == req.params.id);
        res.render(path.resolve(__dirname, '..', 'views','products','productDetail'), {moto: motoAMostrar});
    }
}
