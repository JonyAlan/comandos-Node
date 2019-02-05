var http = require( 'http' );
var bl = require( 'bl' );
var ret = [];
var count = 0;

for( var i = 2 ; i < 5; i ++){

    http.get( process.argv[i], function() {
        var my = i;
     
    return function(response){    
    response.pipe( bl(function( err, data ) {
    if ( err )
        return console.error("Error:" +err);
    ret[ my - 2 ] = data.toString();             
    count++;
    if ( count == 3 ) {            
        for ( var j = 0; j < 3; j++ )                 
         console.log( ret[ j ] );            
         } 
    }
     ) ); 

     

    }
 }() );
}


// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }