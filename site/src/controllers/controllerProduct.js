const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Product = db.Product





module.exports = {
    index: function(req,res){
        Product.findAll()
            .then(
                bikes =>{
                    res.render(path.resolve(__dirname, '..', 'views','products','products'),{bikes});
                }
            )
            .catch(err => res.send(err))
    },
    cart: function(req,res){
            Product.findByPk(req.params.id)
                .then(
                    bike =>{
                        res.render(path.resolve(__dirname, '..', 'views','products','productCart'), {bike})
                    }
                )
                .catch(err => res.send(err))        
    },
    detail: function(req,res){
        Product.findByPk(req.params.id)
                .then(
                    bike =>{
                        res.render(path.resolve(__dirname, '..', 'views','products','productDetail'), {bike})
                    }
                )
                .catch(err => res.send(err)) 
    }
}
