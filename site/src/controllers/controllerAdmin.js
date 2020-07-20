const path = require('path');
const fs = require('fs');

let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));

module.exports = {
  add: (req,res) =>{
      res.render(path.resolve(__dirname, '..', 'views','admin','productAdd'));
  },
   administrar: (req,res) =>{
      res.render(path.resolve(__dirname,'..','views','admin','administrar'), {motos});
  },
  create: (req, res) =>{
    let ultimaMoto = motos.pop();    
    motos.push(ultimaMoto);
    let nuevaMoto = {
      id: ultimaMoto.id + 1,
      marca: req.body.marca,
      modelo: req.body.modelo,
      color: req.body.color,
      cilindrada: req.body.cilindrada,
      frenos: req.body.frenos,
      stock: req.body.stock,
      iva: req.body.iva,
      bruto: req.body.bruto,      
      moneda: req.body.moneda,  
      imagenPortada: req.files[0].filename,
      imagen1: req.files[1].filename,
      imagen2: req.files[2].filename,
      imagen3: req.files[3].filename,
      imagen4: req.files[4].filename,
      descripcion: req.body.descripcion,
      especificaciones: req.body.especificaciones,
    }
    motos.push(nuevaMoto);
    fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),JSON.stringify(motos, null, 2));
    res.redirect('/administrar');
  },
  edit: (req,res) =>{
    let motoAEditar = motos.find(moto => moto.id == req.params.id);
    res.render(path.resolve(__dirname,'..','views','admin','edit'), {moto : motoAEditar});    
  },
  update: (req, res) => {
    req.body.id = req.params.id;  
    req.body.imagenPortada = req.files[0] ? req.files[0].filename : req.body.oldImagenPortada;
    req.body.imagen1 = req.files[1] ? req.files[1].filename : req.body.oldImagen1;
    req.body.imagen2 = req.files[2] ? req.files[2].filename : req.body.oldImagen2;
    req.body.imagen3 = req.files[3] ? req.files[3].filename : req.body.oldImagen3;
    req.body.imagen4 = req.files[4] ? req.files[4].filename : req.body.oldImagen4;
    let motosUpdate = motos.map(moto=>{
        if(moto.id == req.body.id){
       return moto= req.body;
      }
    return moto;
  });
  let oldImages = [req.body.oldImagenPortada, req.body.oldImagen1, req.body.oldImagen2, req.body.oldImagen3, req.body.oldImagen4]
  for(let i = 0; i < oldImages.length; i++){
  if(req.files[i]){
    fs.unlink(path.resolve(__dirname, '../../public/asset/img/productos/'+ oldImages[i]),(err) => {
      if (err){console.log(err)};
      console.log('../../public/asset/img/productos/'+ oldImages[i] + ' fue borrada');
    });
  }}
    fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),JSON.stringify(motosUpdate, null, 2));
    res.redirect('/administrar');
  },
  destroy: (req, res) =>{
    let motosFinal = motos.filter(moto => moto.id != req.params.id)
    fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),JSON.stringify(motosFinal, null, 2));
    res.redirect('/administrar');
  }  
}
