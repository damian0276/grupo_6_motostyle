const path = require("path");
const {
    check,  
    validationResult,
    body
} = require("express-validator");


module.exports = [
    check("model").isLength({min:1}).withMessage("El campo modelo no puede estar vacío"),
    check("cc").isLength({min:1}).withMessage("Debes completar la cilindrada de la moto")
               .isNumeric().withMessage("Completá sólo con números"), 
    check("stock").isLength({ min: 1 }).withMessage("El campo stock no puede estar vacío")
                  .isNumeric().withMessage("Completá sólo con números"),
    check("iva").isLength({ min: 1 }).withMessage("El campo IVA no puede estar vacío"),
    check("gross").isLength({min:1}).withMessage("El valor del producto no puede estar vacío"),
    check("imagenPortada").custom((value, { req }) => {
            let image = req.files.find(file => file.fieldname == "imagenPortada")
            if(image){
            let ext = path.extname(image.filename).toLowerCase();
            switch (ext) {                
                case ".jpg":
                    return true;
                case ".jpeg":
                    return true;
                case ".png":
                    return true;
                default:
                    return false;
            }} else {
                return false
            }   
        }).withMessage("El archivo debe ser formato JPG, JPEG o PNG."),
    check("imagen1").custom((value, { req }) => {
            let image = req.files.find(file => file.fieldname == "imagen1")
            if(image){
            let ext = path.extname(image.filename).toLowerCase();
            switch (ext) {                
                case ".jpg":
                    return true;
                case ".jpeg":
                    return true;
                case ".png":
                    return true;
                default:
                    return false;
            }} else {
                return false
            }   
        }).withMessage("El archivo debe ser formato JPG, JPEG o PNG."),
    check("imagen2").custom((value, { req }) => {
            let image = req.files.find(file => file.fieldname == "imagen2");
            if(image){
            let ext = path.extname(image.filename).toLowerCase();
            switch (ext) {                
                case ".jpg":
                    return true;
                case ".jpeg":
                    return true;
                case ".png":
                    return true;
                default:
                    return false;
            }} else {
                return false
            }   
        }).withMessage("El archivo debe ser formato JPG, JPEG o PNG."),
    check("imagen3").custom((value, { req }) => {
            let image = req.files.find(file => file.fieldname == "imagen3")
            if(image){
            let ext = path.extname(image.filename).toLowerCase();
            switch (ext) {                
                case ".jpg":
                    return true;
                case ".jpeg":
                    return true;
                case ".png":
                    return true;
                default:
                    return false;
            }} else {
                return false
            }   
        }).withMessage("El archivo debe ser formato JPG, JPEG o PNG."),
    check("imagen4")
        .custom((value, { req }) => {
            let image = req.files.find(file => file.fieldname == "imagen4")
            if(image){
            let ext = path.extname(image.filename).toLowerCase();
            switch (ext) {                
                case ".jpg":
                    return true;
                case ".jpeg":
                    return true;
                case ".png":
                    return true;
                default:
                    return false;
            }} else {
                return false
            }   
        }).withMessage("El archivo debe ser formato JPG, JPEG o PNG."),
    check("description").isLength({ min: 20 }).withMessage("Por favor completá el campo con la descripción del produco"),
    check("specification").isLength({ min: 20 }).withMessage("El campo especificaciones no puede estar vacío")

]
