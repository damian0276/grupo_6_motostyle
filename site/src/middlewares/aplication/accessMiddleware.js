const db = require('../../database/models');
const User = db.User;


module.exports = (req,res,next) => {
    res.locals.user = false;   
    if(req.session.user){
        res.locals.user = req.session.user;
        return next();
    } else if(req.cookies.email){
        User.findOne({where:{email:req.cookies.email}})
            .then(user => {
            let userLogueado = user;
            delete userLogueado.password;            
            //console.log(userLogueado);
            res.locals.user = userLogueado;
            console.log('asdasd22222222222' +' '+ res.locals.user);
            return next();
            })
            .catch(err => res.send(err));
    }
    next()
}
