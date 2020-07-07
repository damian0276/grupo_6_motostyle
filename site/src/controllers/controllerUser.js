const path = require('path');
const fs = require('fs');

module.exports = {    
    register: function(req, res){
        res.sendFile(path.resolve(__dirname, '..', 'views','users','register.html'))
    }
}
 