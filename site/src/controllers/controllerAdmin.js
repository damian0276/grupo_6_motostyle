const path = require('path');
const fs = require('fs')

module.exports = {
    add: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','admin','productAdd.html'));
    },
     edit: (req,res) =>{
        //  let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data',motos.json)));
    //     const motosId = req.params.id;
    //    let motosEditar = motos.find(moto =>moto.id == motosId)
       res.sendFile(path.resolve(__dirname,'..','views','admin','edit.html'));
     }
}
