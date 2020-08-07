module.exports= (req,res,next) =>{
    if(res.locals.user){
        return next();
    }else{
        res.redirect('/login') 
    }
}