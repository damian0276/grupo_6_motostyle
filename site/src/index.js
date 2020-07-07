const express = require('express');
const app = express();
const path = require('path');

//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//Requerir las rutas

const webRoutes = require('./routes/web');
//const userRoutes = require('./routes/user');
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/admin');

//Para usar las rutas

//app.use(userRoutes);
app.use(webRoutes);
app.use(productRoutes);
app.use(adminRoutes);


//Levantar servidor

app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3000'));