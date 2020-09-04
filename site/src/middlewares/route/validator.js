const path = require('path');
const db = require('../../database/models')
const User = db.User
const bcrypt = require('bcryptjs');

const {
    check,
    validationResult,
    body
} = require('express-validator');

module.exports = {

    productAdd: [

        check('brand').exists().withMessage('Debes elegir una marca.'),
        check('model')
            .isLength({ min: 1 }).withMessage('Este campo no puede estar vacío')
            .isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres.'),
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
            //.exists().withMessage('Debes seleccionar una imagen.')
            .custom((value, { req }) => {
                //console.log(req.files[0].fieldname+'------------------------------------------');
                let image = req.files.find(file => file.fieldname == 'imagenPortada')
                //console.log(image);
                if(image){
                let ext = path.extname(image.filename).toLowerCase();
                switch (ext) {                
                    case '.jpg':
                        return true;
                    case '.jpeg':
                        return true;
                    case '.png':
                        return true;
                    default:
                        return false;
                }} else {
                    return false
                }   
            }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
        check('imagen1')
            //.exists().withMessage('Debes seleccionar una imagen.')
            .custom((value, { req }) => {
                //console.log(req.files[0].fieldname+'------------------------------------------');
                let image = req.files.find(file => file.fieldname == 'imagen1')
                //console.log(image);
                if(image){
                let ext = path.extname(image.filename).toLowerCase();
                switch (ext) {                
                    case '.jpg':
                        return true;
                    case '.jpeg':
                        return true;
                    case '.png':
                        return true;
                    default:
                        return false;
                }} else {
                    return false
                }   
            }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
        check('imagen2')
            //.exists().withMessage('Debes seleccionar una imagen.')
            .custom((value, { req }) => {
                //console.log(req.files[0].fieldname+'------------------------------------------');
                let image = req.files.find(file => file.fieldname == 'imagen2');
                if(image){
                let ext = path.extname(image.filename).toLowerCase();
                switch (ext) {                
                    case '.jpg':
                        return true;
                    case '.jpeg':
                        return true;
                    case '.png':
                        return true;
                    default:
                        return false;
                }} else {
                    return false
                }   
            }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
        check('imagen3')
            //.exists().withMessage('Debes seleccionar una imagen.')
            .custom((value, { req }) => {
                //console.log(req.files[0].fieldname+'------------------------------------------');
                let image = req.files.find(file => file.fieldname == 'imagen3')
                //console.log(image);
                if(image){
                let ext = path.extname(image.filename).toLowerCase();
                switch (ext) {                
                    case '.jpg':
                        return true;
                    case '.jpeg':
                        return true;
                    case '.png':
                        return true;
                    default:
                        return false;
                }} else {
                    return false
                }   
            }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
        check('imagen4')
            //.exists().withMessage('Debes seleccionar una imagen.')
            .custom((value, { req }) => {
                //console.log(req.files[0].fieldname+'------------------------------------------');
                let image = req.files.find(file => file.fieldname == 'imagen4')
                //console.log(image);
                if(image){
                let ext = path.extname(image.filename).toLowerCase();
                switch (ext) {                
                    case '.jpg':
                        return true;
                    case '.jpeg':
                        return true;
                    case '.png':
                        return true;
                    default:
                        return false;
                }} else {
                    return false
                }   
            }).withMessage('El archivo debe ser formato JPG, JPEG o PNG.'),
        check('description')
            .isLength({ min: 20 }).withMessage('Este campo debe tener al menos 20 caracteres.')
            .isAlphanumeric().withMessage('Debe contener caracteres alfanumericos.'),
        check('specification')
            .isLength({ min: 20 }).withMessage('Este campo debe tener al menos 20 caracteres.')
            .isAlphanumeric().withMessage('Debe contener caracteres alfanumericos.')
    
    ],
    productEdit: [
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
                    return true
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
                    return true
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
                    return true
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
                    return true
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
                    return true
                }   
            }).withMessage("El archivo debe ser formato JPG, JPEG o PNG."),
        check("description").isLength({ min: 20 }).withMessage("Por favor completá el campo con la descripción del produco"),
        check("specification").isLength({ min: 20 }).withMessage("El campo especificaciones no puede estar vacío")
    
    ],
    login: [
        body('email').custom((value, {req}) => {
          return User.findOne({where:{email:value}}).then(user => {
            if (user && bcrypt.compareSync(req.body.password,user.password)) {
              return true;            
              } else{
              return Promise.reject('Credenciales Inválidas');
              }
          });
               
        }),
        check('email').isLength({
            min: 1
          }).withMessage('El campo nombre no puede estar vacío'),
        check('password').isLength({
            min: 1
          }).withMessage('El campo nombre no puede estar vacío')
      
          // body('field_name').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i").withMessage('Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long'),
      ],
      register: [
        check('firstName').isLength({
            min: 1
        }).withMessage('El campo nombre no puede estar vacío'),
        check('lastName').isLength({
            min: 1
        }).withMessage('El campo apellido no puede estar vacío'),
        check('email').isEmail().withMessage('Agregar un email válido'),
        //Aquí incoporé otras validaciones, para que las tengan de guía en sus proyectos
        //Aquí valido si el usuario ya está registrado en nuestro archivo JSON, esta es una forma
        //Aquí valido el Password       
        check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
        //Aquí valido la confimación del password dispuesto por el usuario
        check('confirmPassword').isLength({ min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),
        //Aquí valido si las contraseñas son iguales o no
        //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
        //El valor { req } corresponde a lo que viene desde el formulario
        //check('email').custom( async value => Array.from( await User.findAll()).filter(user => user.email == value).length == 0 ? true: false).withMessage('lololo'),
        body('confirmPassword').custom((value, { req }) => {
            if (req.body.password == value) {
                return true    // Si yo retorno un true  no se muestra el error     
            } else {
                return false   // Si retorno un false si se muestra el error
            }
        }).withMessage('Las contraseñas deben ser iguales'),
        //para el login, validacion de pass y usuario
        //body('email').custom(async (value,{req}) => Array.from(await User.findAll()).filter(usuario => usuario.email == value && bcrypt.compareSync(req.body.password,usuario.password)).length > 0 ? Promise.reject("Credenciales Inválidas") : true),
    
        body('email').custom(async value => Array.from(await User.findAll()).filter(usuario => usuario.email == value).length > 0 ? Promise.reject("Usuario Existente") : true),
        body('avatar').custom((value, { req }) => {
            if (req.file != undefined) {
                return true
            }
            return false;
        }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG'),
        body('avatar').custom((value, { req }) => {
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
        }).withMessage('El archivo debe ser formato: .JPG o .JPEG o . PNG')
    ]
}