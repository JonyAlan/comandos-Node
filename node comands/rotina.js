const fs = require('fs')
const path = require('path')


module.exports = function(dir, extensao, callback){
fs.readdir(dir,function(err, lista) {
   if (err) {
      return callback(err);
   }

   lista = lista.filter( function (file) {
        return path.extname(file) === '.'+ extensao
   
   })

        callback(null, lista)
  
})

}