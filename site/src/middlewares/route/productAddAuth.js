const path = require('path');
const {
    check,
    validationResult,
    body
} = require('express-validator');

module.exports = [

    check('brand').exists().withMessage('Debes elegir una marca.'),
    check('model')
        .isLength({ min: 1 }).withMessage('Este campo no puede estar vacío')
        .isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres.')
        .isAlphanumeric().withMessage('Debe contener caracteres alfanumericos.'),
    check('color').exists().withMessage('Debes elegir un color.'),
    check('cc')
        .isLength({ min: 1 }).withMessage('Este campo no puede estar vacío.')
        .isLength({ min: 3 }).withMessage('Debe tener al menos 3 cifras.')
        .isNumeric().withMessage('Debes ingresar solo números.'),
    check('brakes').exists().withMessage('Debes elegir un tipo de frenos.'),
    check('stock')
        .isLength({ min: 1 }).withMessage('Este campo no puede estar vacío.')
        .isNumeric().withMessage('Debes ingresar solo números'),
    check('coin').exists().withMessage('Debes elegir un tipo de moneda.'),
    check('iva')
        .isLength({ min: 1 }).withMessage('El campo IVA no puede estar vacío.')
        .isNumeric().withMessage('Debes ingresar solo números.'),
    check('gross')
        .isLength({ min: 1 }).withMessage('El campo BRUTO no puede estar vacío')
        .isNumeric().withMessage('Debes ingresar solo números.'),
    check('imagenPortada')
        .exists().withMessage('Debes seleccionar una imagen.')
        .custom((value, { req }) => {
            //console.log(req.file.filename);
            let ext = path.extname(req.file.filename).toLowerCase()
            switch (ext) {
                case '.jpg':
                    return true;
                case '.jpeg':
                    return true;
                case '.png':
                    return true;
                default:
                    return false;
            }
        }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
    check('imagen1')
        .exists().withMessage('Debes seleccionar una imagen.')
        .custom((value, { req }) => {
            //console.log(req.file.filename);
            let ext = path.extname(req.file.filename).toLowerCase()
            switch (ext) {
                case '.jpg':
                    return true;
                case '.jpeg':
                    return true;
                case '.png':
                    return true;
                default:
                    return false;
            }
        }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
    check('imagen2')
        .exists().withMessage('Debes seleccionar una imagen.')
        .custom((value, { req }) => {
            //console.log(req.file.filename);
            let ext = path.extname(req.file.filename).toLowerCase()
            switch (ext) {
                case '.jpg':
                    return true;
                case '.jpeg':
                    return true;
                case '.png':
                    return true;
                default:
                    return false;
            }
        }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
    check('imagen3')
        .exists().withMessage('Debes seleccionar una imagen.')
        .custom((value, { req }) => {
            //console.log(req.file.filename);
            let ext = path.extname(req.file.filename).toLowerCase()
            switch (ext) {
                case '.jpg':
                    return true;
                case '.jpeg':
                    return true;
                case '.png':
                    return true;
                default:
                    return false;
            }
        }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
    check('imagen4')
        .exists().withMessage('Debes seleccionar una imagen.')
        .custom((value, { req }) => {
            //console.log(req.file.filename);
            let ext = path.extname(req.file.filename).toLowerCase()
            switch (ext) {
                case '.jpg':
                    return true;
                case '.jpeg':
                    return true;
                case '.png':
                    return true;
                default:
                    return false;
            }
        }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
    check('description')
        .isLength({ min: 20 }).withMessage('Este campo debe tener al menos 20 caracteres.')
        .isAlphanumeric().withMessage('Debe contener caracteres alfanumericos.'),
    check('specification')
        .isLength({ min: 20 }).withMessage('Este campo debe tener al menos 20 caracteres.')
        .isAlphanumeric().withMessage('Debe contener caracteres alfanumericos.')

]