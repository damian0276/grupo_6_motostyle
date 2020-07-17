const path = require('path');
const fs = require('fs');

let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));

module.exports = {
  add: (req,res) =>{
      res.render(path.resolve(__dirname, '..', 'views','admin','productAdd'));
  },
   edit: (req,res) =>{
  
     res.render(path.resolve(__dirname,'..','views','admin','edit'));
   },
   administrar: (req,res) =>{
      res.render(path.resolve(__dirname,'..','views','admin','administrar'), {motos});
  },
  createUno: (req, res) =>{
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
      moneda: req.body.moneda
    }
    motos.push(nuevaMoto);
    fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),JSON.stringify(motos, null, 2)); 
  }, 
  createDos: (req, res) =>{
    let ultimaMoto = motos.pop();
    ultimaMoto={
      imagenPortada: req.file.filename,
      imagen1: req.file.filename,
      imagen2: req.file.filename,
      imagen3: req.file.filename,
      imagen4: req.file.filename,
      descripcion: req.body.descripcion,
      especificaciones: req.body.especificaciones,
    }
    motos.push(ultimaMoto);
    fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),JSON.stringify(motos, null, 2));
    res.redirect('/administrar');
  }
}
