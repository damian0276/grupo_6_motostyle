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
    check("gross").isLength({min:1}).withMessage("El campo bruto no puede estar vacío"),
    check("description").isLength({min:10}).withMessage("Debés completar con una descripción"),
    check("specification").isLength({min:10}).withMessage("El campo especificaciones no puede estar vacío"),
    body('imagenPortada').custom(function (value, { req }) {
        let ext
        if(req.file != undefined ){
            return true
        }else{
            ext = ""+path.extname(req.files[0].filename).toLowerCase();
        }
        if (
            ext == ".jpg" ||
            ext == ".jpeg" ||
            ext == ".png" ||
            ext == ".gif"){
                return true;
            }
            return false;
      }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF'),
    
]

