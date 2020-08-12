module.exports= (req,res,next) =>{
    if(res.locals.user.profile == 9){
        return next();
    }else{
        res.redirect('/administrar') 
    }
}