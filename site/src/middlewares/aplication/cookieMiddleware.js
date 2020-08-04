const db = require('../database/models');
const User = db.User;


module.exports = (req,res,next) => {
    if(req.cookie.email){
        User.findOne({where:{email:req.cookie.email}})
            .then(user => {
            let userLogueado = user;
            delete userLogueado.password;
            req.session.user = userLogueado
            })
            .catch(err => res.send(err));
    }
    next()
}
