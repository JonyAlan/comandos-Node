
// Escreva um programa que aceite um ou mais números como argumentos da linha de comando e 
// imprima a soma desses números no console (stdout)
var result =0;
for(var i = 2; i < process.argv.length; i++)
result += Number(process.argv[i]);
console.log(result);


// var sum = 0; 
// for( var i = 2; i < process.argv.length; i++ )     
// sum += Number( process.argv[ i ] ); 
// console.log( sum );