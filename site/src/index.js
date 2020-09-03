const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookie = require("cookie-parser");
const accessMiddleware = (require('./middlewares/aplication/accessMiddleware'))


//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//Seteo del motor de plantillas EJS
app.set('view engine', 'ejs');

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(methodOverride('_method'));

//Middleware de aplicacion  express-session
app.use(session({
    secret: "homero está loco",
    resave : true,
    saveUninitialized : true
}));

//Usamos cookie-parser
app.use(cookie());

//Middleware para poner en session al usuario en la cookie
app.use(accessMiddleware);

//Requerir las rutas

const webRoutes = require('./routes/web');
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const apiRoutes = require('./routes/api/apiRouteUser')



//Para usar las rutas

//app.use(userRoutes);
app.use(webRoutes);
app.use(productRoutes);
app.use(adminRoutes);
app.use(userRoutes);
app.use(apiRoutes);


//Levantar servidor

app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3000'));