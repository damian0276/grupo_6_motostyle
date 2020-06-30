const path = require('path');
const fs = require('fs')

module.exports = {
    cart: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','products','productCart.html'));
    },
    detail: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','products','productDetail.html'));
    }
}