const path = require('path');
const {
    check,  
    validationResult,
    body
} = require('express-validator');


module.exports = [
    check("model").isLength({min:1}).withMessage('El campo modelo no puede estar vacío'),
    check("cc").isLength({min:1}).withMessage('Debes completar la cilindrada de la moto'),
    check("brakes").isLength({min:1}).withMessage('El campo stock no puede estar vacío'),
    check("gross").isLength({min:1}).withMessage("El valor del producto no puede estar vacío"),
    check("description").isLength({min:10}).withMessage("Por favor completá el campo con la descripción del produco"),
    check("specification").isLength({min:10}).withMessage("El campo especificaciones no puede estar vacío"),
    check('imagenPortada').custom(function (value, { req }) {
        let image = req.file.find(file=>file.filename == "imagenPortada")
        if(image){
            let ext = path.extname(image.filename).toLowerCase();
        switch (ext){
        case ".jpg": 
          return true;
        case ".jpeg": 
          return true;
        case ".png": 
          return true;
        default: 
          return false;
        }}else{
           return false
        }        
        }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF'),
    check('imagen1').custom(function (value, { req }) {
        let image = req.file.find(file=>file.filename == "imagen1")
        if(image){
            let ext = path.extname(image.filename).toLowerCase();
        switch (ext){
        case ".jpg": 
          return true;
        case ".jpeg": 
          return true;
        case ".png": 
          return true;
        default: 
          return false;
        }}else{
            return false
        }        
        }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF'),
    check('imagen2').custom(function (value, { req }) {
        let image = req.file.find(file=>file.filename == "imagen2")
        if(image){
            let ext = path.extname(image.filename).toLowerCase();
        switch (ext){
        case ".jpg": 
          return true;
        case ".jpeg": 
          return true;
        case ".png": 
          return true;
        default: 
          return false;
        }}else{
            return false
        }        
        }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF'), 
    check('imagen3').custom(function (value, { req }) {
        let image = req.file.find(file=>file.filename == "imagen3")
        if(image){
            let ext = path.extname(image.filename).toLowerCase();
        switch (ext){
        case ".jpg": 
          return true;
        case ".jpeg": 
          return true;
        case ".png": 
          return true;
        default: 
          return false;
        }}else{
            return false
        }        
        }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF'),  
    check('imagen4').custom(function (value, { req }) {
        let image = req.file.find(file=>file.filename == "imagen4")
        if(image){
            let ext = path.extname(image.filename).toLowerCase();
        switch (ext){
        case ".jpg": 
          return true;
        case ".jpeg": 
          return true;
        case ".png": 
          return true;
        default: 
          return false;
        }}else{
            return false
        }        
        }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF'),
      ]