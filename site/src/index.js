const express = require('express');
const app = express();
const path = require('path');

//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//Seteo del motor de plantillas EJS
app.set('view engine', 'ejs');

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Requerir las rutas

const webRoutes = require('./routes/web');
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

//Para usar las rutas

//app.use(userRoutes);
app.use(webRoutes);
app.use(productRoutes);
app.use(adminRoutes);
app.use(userRoutes);


//Levantar servidor

app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3000'));