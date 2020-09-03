const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Product = db.Product;
const Op = db.Sequelize.Op;

module.exports = {
    index: function(req,res){
        Product.findAll({include: ['brand',"color","image"]}) 
            .then(
                bikes =>{
                    //return res.send(bikes)
                    res.render(path.resolve(__dirname, '..', 'views','products','products'),{bikes});
                } 
            )
            .catch(err => res.send(err))
    },
    cart: function(req,res){
            Product.findByPk(req.params.id, {include: ['brand',"color","image"]})
                .then(
                    bike =>{
                        let imagesNoCover = bike.image.filter(image => image.coverImage == 0)
                        res.render(path.resolve(__dirname, '..', 'views','products','productCart'), {bike,imagesNoCover})
                    }
                )
                .catch(err => res.send(err))        
    },
    detail: function(req,res){
        Product.findByPk(req.params.id, {include: ['brand',"color","image"]})
                .then(
                    bike =>{
                        let imagesNoCover = bike.image.filter(image => image.coverImage == 0)
                        res.render(path.resolve(__dirname, '..', 'views','products','productDetail'), {bike,imagesNoCover})
                    }
                )
                .catch(err => res.send(err)) 
    },
    search: (req, res) =>{
        Product.findAll({
            where:{
                model: {[Op.like]: `%${req.query.search}%`}
            },
            include:{
                all: true,
                nested: true
            }
        })
            .then(bikes => {
                //return res.send(bikes);
                res.render(path.resolve(__dirname, '..', 'views','products','products'),{bikes})})
            .catch(err => res.send(err))
    }
}
