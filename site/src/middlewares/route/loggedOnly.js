module.exports= (req,res,next) =>{
    if(res.locals.user){
        return next();
    }else{
        res.redirect('/') // modificar ruta que esta en el archivo de la china
    }
}