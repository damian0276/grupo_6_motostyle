const path = require('path');
const fs = require('fs')

module.exports = {
    index: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','products','products'));
    },
    cart: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','products','productCart'));
    },
    detail: function(req,res){
        res.render(path.resolve(__dirname, '..', 'views','products','productDetail'));
    }
}