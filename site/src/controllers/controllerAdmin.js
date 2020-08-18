const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const User = db.User;
const Product = db.Product;
const Image = db.Image;
const ImageProduct = db.ImageProduct;



module.exports = {
  add: (req,res) =>{
      res.render(path.resolve(__dirname, '..', 'views','admin','productAdd'));
  },
   administrar: (req,res) =>{
     Product.findAll({include: ['brand']})
     .then(bikes => {
      res.render(path.resolve(__dirname,'..','views','admin','administrar'), {bikes});
     })
     .catch(err =>res.send(err))
  },
  create:async (req, res) =>{

    let imagesIds = [];
    req.files.forEach(async image =>{ 
      let file = await Image.create({
        name: image.filename
      })
      imagesIds.push(file.id);
    });
    let nuevaMoto = await Product.create({
      brandId: req.body.brand,
      model: req.body.model,
      colorId: req.body.color,
      cc: req.body.cc,
      brakes: req.body.brakes,
      stock: req.body.stock,
      iva: req.body.iva,
      gross: req.body.gross,      
      coin: req.body.coin,
      description: req.body.description,
      specification: req.body.specification
    })
    imagesIds.forEach(async imageId =>{
      ImageProduct.create({
        productId: nuevaMoto.id,
        imageId: imageId
      })
    })    
    return res.redirect('/administrar');
  },
  edit: (req,res) =>{
    Product.findByPk(req.params.id,{include: ['brand', 'color', 'image']})
      .then(bike=>{
        //return res.send(bike)
        res.render(path.resolve(__dirname,'..','views','admin','edit'),{bike})
      })     
     
  },
  update:async (req, res) => {
     await Product.update({
      brandId: req.body.brand,
      model: req.body.model,
      color: req.body.color,
      cc: req.body.cc,
      brakes: req.body.brakes,
      stock: req.body.stock,
      iva: req.body.iva,
      gross: req.body.gross,      
      coin: req.body.coin,
      description: req.body.description,
      specification: req.body.specification
      },
      {
        where:{
          id:req.params.id
        }
      }    
      )
    if(req.files){
      let imagesIds = [];
      let deletedImagesIds = [];
      req.files.forEach(async image =>{ 
        let file = await Image.create({
          name: image.filename
        })
        switch (image.fieldname){
          case 'imagenPortada': let imagenPortada = await  Image.destroy({where:{name:req.body.oldImagenPortada}})
                                deletedImagesIds.push(imagenPortada.id);
          break;
          case 'imagen1': let imagen1 = await Image.destroy({where:{name:req.body.oldImagen1}})
                          deletedImagesIds.push(imagen1.id);
          break;
          case 'imagen2': let imagen2 = await Image.destroy({where:{name:req.body.oldImagen2}})
                          deletedImagesIds.push(imagen2.id);
          break;
          case 'imagen3': let imagen3 = await Image.destroy({where:{name:req.body.oldImagen3}})
                          deletedImagesIds.push(imagen3.id);
          break;
          case 'imagen4': let imagen4 = await Image.destroy({where:{name:req.body.oldImagen4}})
                         deletedImagesIds.push(imagen4.id);
          break;
        }
        imagesIds.push(file.id);
      })
      imagesIds.forEach(async imageId =>{
        ImageProduct.create({
          productId: req.params.id,
          imageId: imageId
        })
      })   
      deletedImagesIds.forEach(async deletedImageId =>{
        ImageProduct.destroy({where:{imageId:deletedImageId}})//como hacer el destroy de las imagenes y de las imagenProduct
      })
    }


    
  // let oldImages = [req.body.oldImagenPortada, req.body.oldImagen1, req.body.oldImagen2, req.body.oldImagen3, req.body.oldImagen4]
  // for(let i = 0; i < oldImages.length; i++){
  // if(req.files[i]){
  //   fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/'+ oldImages[i]),(err) => {
  //     if (err){console.log(err)};
  //     console.log('../../public/asset/img/productos/'+ oldImages[i] + ' fue borrada');
  //   });
  // }}
   
  return  res.redirect('/administrar');
  },
  destroy: async (req, res) =>{
    let imagesToDestroyIds = await ImageProduct.findAll({where:{productId:req.params.id}})    
    imagesToDestroyIds.forEach( async fila =>{
       await Image.destroy({where:{id:fila.imageId}})
    })   
    await ImageProduct.destroy({where:{id:req.params.id}})
    await Product.destroy({where:{id:req.params.id}})// Preguntar como borrar cosas con relaciones----------------------------------
     return res.redirect('/administrar');
  },
  adminUser:(req,res)=>{
    User.findAll()
    .then(function (users){
      res.render(path.resolve(__dirname, '..', 'views','admin','adminUser'),{users});
      
    })
    .catch(error=>res.send(error)
    )    
  },
  editUserProfile:(req,res)=>{
    User.update({
      profile:req.body.profile
      },
      {
      where : {
      id : req.params.id
      }
      })
      .then(confirm =>{
      res.redirect('/adminUser')
      })
      .catch(error => res.send(error));  
  },
  deleteUser:(req,res) => {
    User.destroy({
        where : {
           id:  req.params.id
        },
        force : true 
    })
    .then(confirm =>{
        res.redirect('/adminUser');
    })  
  },
  userShow: (req, res) =>{
    User.findByPk(req.params.id)
      .then(user => {
        //return console.log(user);
        res.render(path.resolve(__dirname, '..', 'views','admin','adminUserShow'), {userToShow : user}) 
      })
      .catch(err => res.send(err))
    
  }
}