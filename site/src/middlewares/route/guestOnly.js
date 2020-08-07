module.exports= (req,res,next) =>{
    if(!res.locals.user){
        return next();
    }else{
        res.redirect('/user/profile/'+ res.locals.user.id) 
    }
}