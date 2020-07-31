const path = require('path');
const {
    check,
    validationResult,
    body
} = require('express-validator');

module.exports = (req,res,next) =>{
    let errors = validationResult(req);
    if(errors.isEmpty()){
    next()
}else{

return res.render(path.resolve(__dirname, '../../views/users/register'), {
    errors: errors.mapped(),  old: req.body
  })
 // return res.send(errors);
  }
}