const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const User = db.User;
const Product = db.Product;
const Image = db.Image;
const ImageProduct = db.ImageProduct;
const Brand = db.Brand;
const Color = db.Color;

const {
  check,
  validationResult,
  body
} = require('express-validator');


module.exports = {
  add: async (req, res) => {

    let brands = await Brand.findAll();
    let colors = await Color.findAll();
    res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd'), { brands, colors });

  },

  administrar: (req, res) => {

    Product.findAll({ include: ['brand'] })
      .then(bikes => {
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'administrar'), { bikes });
      })
      .catch(err => res.send(err))

  },

  create: async (req, res) => {

    let errors = validationResult(req);
    if (errors.isEmpty()) {

      let imagesIds = [];
      req.files.forEach(async image => {
        if (image.fieldname == 'imagenPortada') {
          let file = await Image.create({
            name: image.filename,
            coverImage: 1
          })
          imagesIds.push(file.id);
        } else {
          let file = await Image.create({
            name: image.filename,
            coverImage: 0
          })
          imagesIds.push(file.id);
        }
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
      imagesIds.forEach(async id => {
        ImageProduct.create({
          productId: nuevaMoto.id,
          imageId: id
        })
      })
      return res.redirect('/administrar');

    } else {

      if (req.files) {
        req.files.forEach(file => {
          fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/' + file.filename), (err) => {
            if (err) { console.log(err) };
            //console.log('../../public/asset/img/users/'+ req.file.filename + ' fue borrada');
          });
        })

      }
      let brands = await Brand.findAll();
      let colors = await Color.findAll();
      return res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd'), {
        errors: errors.mapped(), old: req.body, brands, colors
      });
    }
  },
  edit: (req,res) =>{
    
    Product.findByPk(req.params.id,{include: ['brand', 'color', 'image']})
      .then(bike=>{
        let numInput = 0;
        let numOld = 0;
        //return res.send(bike.image)
        let imagesNoCover = bike.image.filter(image => image.coverImage != 1)
        //return res.send(imagesNoCover)
        res.render(path.resolve(__dirname,'..','views','admin','edit'),{bike, imagesNoCover,numInput, numOld})
      })     
     
  },
  update:async (req, res) => {
    let errors = validationResult(req);
        if(!errors.isEmpty()){ 
          Product.findByPk(req.params.id,{include: ['brand', 'color', 'image']})
          .then(bike=>{
            let numInput = 0;
            let numOld = 0;
            //return res.send(bike.image)
            let imagesNoCover = bike.image.filter(image => image.coverImage != 1)
            //return res.send(imagesNoCover)
            res.render(path.resolve(__dirname,'..','views','admin','edit'),{bike, imagesNoCover,numInput, numOld, errors: errors.mapped()})
          })
        } else {
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
        where: {
          id: req.params.id
        }
      }
    )
    if (req.files) {
      req.files.forEach(async image => {
        switch (image.fieldname) {
          case 'imagenPortada': {
            let imagenPortada = await Image.findOne({ where: { name: req.body.oldImagenPortada } })
            await ImageProduct.destroy({ where: { imageId: imagenPortada.id } })
            await Image.destroy({ where: { id: imagenPortada.id } })
            let newImagenPortada = await Image.create({ name: image.filename, coverImage: 1 })
            await ImageProduct.create({
              productId: req.params.id,
              imageId: newImagenPortada.id
            })
            fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/' + req.body.oldImagenPortada), (err) => {
              if (err) { console.log(err) };
              console.log('../../public/asset/img/productos/' + req.body.oldImagenPortada + ' fue borrada');
            })
          }
            break;
          case 'imagen1': {
            let imagen1 = await Image.findOne({ where: { name: req.body.oldImagen1 } })
            await ImageProduct.destroy({ where: { imageId: imagen1.id } })
            await Image.destroy({ where: { id: imagen1.id } })
            let newImagen1 = await Image.create({ name: image.filename, coverImage: 0 })
            await ImageProduct.create({
              productId: req.params.id,
              imageId: newImagen1.id
            })
            fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/' + req.body.oldImagen1), (err) => {
              if (err) { console.log(err) };
              console.log('../../public/asset/img/productos/' + req.body.oldImagen1 + ' fue borrada');
            })
          }
            break;
          case 'imagen2': {
            let imagen2 = await Image.findOne({ where: { name: req.body.oldImagen2 } })
            await ImageProduct.destroy({ where: { imageId: imagen2.id } })
            await Image.destroy({ where: { id: imagen2.id } })
            let newImagen2 = await Image.create({ name: image.filename, coverImage: 0 })
            await ImageProduct.create({
              productId: req.params.id,
              imageId: newImagen2.id
            })
            fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/' + req.body.oldImagen2), (err) => {
              if (err) { console.log(err) };
              console.log('../../public/asset/img/productos/' + req.body.oldImagen2 + ' fue borrada');
            })
          }
            break;
          case 'imagen3': {
            let imagen3 = await Image.findOne({ where: { name: req.body.oldImagen3 } })
            await ImageProduct.destroy({ where: { imageId: imagen3.id } })
            await Image.destroy({ where: { id: imagen3.id } })
            let newImagen3 = await Image.create({ name: image.filename, coverImage: 0 })
            await ImageProduct.create({
              productId: req.params.id,
              imageId: newImagen3.id
            })
            fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/' + req.body.oldImagen3), (err) => {
              if (err) { console.log(err) };
              console.log('../../public/asset/img/productos/' + req.body.oldImagen3 + ' fue borrada');
            })
          }
            break;
          case 'imagen4': {
            let imagen4 = await Image.findOne({ where: { name: req.body.oldImagen4 } })
            await ImageProduct.destroy({ where: { imageId: imagen4.id } })
            await Image.destroy({ where: { id: imagen4.id } })
            let newImagen4 = await Image.create({ name: image.filename, coverImage: 0 })
            await ImageProduct.create({
              productId: req.params.id,
              imageId: newImagen4.id
            })
            fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/' + req.body.oldImagen4), (err) => {
              if (err) { console.log(err) };
              console.log('../../public/asset/img/productos/' + req.body.oldImagen4 + ' fue borrada');
            })
          }
            break;
        }
      })
    }

    return res.redirect('/administrar');

  }},

  destroy: async (req, res) => {

    let imagesToDestroyIds = await ImageProduct.findAll({ where: { productId: req.params.id } })
    await ImageProduct.destroy({ where: { productId: req.params.id }, force: true })
    imagesToDestroyIds.forEach(async fila => {
      let imageToPhysicalErase = await Image.findOne({ where: { id: fila.imageId } })
      fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/' + imageToPhysicalErase.name), (err) => {
        if (err) { console.log(err) };
        console.log('../../public/asset/img/productos/' + imageToPhysicalErase.name + ' fue borrada');
      })
      await Image.destroy({ where: { id: fila.imageId }, force: true })
    })
    await Product.destroy({ where: { id: req.params.id } })
    return res.redirect('/administrar');

  },

  adminUser: (req, res) => {

    User.findAll()
      .then(function (users) {
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminUser'), { users });

      })
      .catch(error => res.send(error)
      )

  },

  editUserProfile: (req, res) => {

    User.update({
      profile: req.body.profile
    },
      {
        where: {
          id: req.params.id
        }
      })
      .then(confirm => {
        res.redirect('/adminUser')
      })
      .catch(error => res.send(error));

  },

  deleteUser: async (req, res) => {

    let deletedUser = await User.findOne({ where: { id: req.params.id } })
    //return res.send(deletedUser)
    await User.destroy({
      where: {
        id: req.params.id
      },
      force: true
    })
    fs.unlink(path.resolve(__dirname, '../../public/asset/img/users/' + deletedUser.image), (err) => {
      if (err) { console.log(err) };
      console.log('../../public/asset/img/users/' + deletedUser.image + ' fue borrada');
    })
    return res.redirect('/adminUser');

  },

  userShow: (req, res) => {

    User.findByPk(req.params.id)
      .then(user => {
        //return console.log(user);
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminUserShow'), { userToShow: user })
      })
      .catch(err => res.send(err))

  }
}