//  Servidor de horário TCP!

//   O servidor deve ouvir as conexões TCP na porta fornecida pelo
//   primeiro argumento para o seu programa. Para cada conexão você deve escrever a
//   data atual e 24 horas no formato:
//      "AAAA-MM-DD hh: mm"
//   seguido por um caractere de nova linha. Mês, dia, hora e minuto devem ser
//   preenchido com zero a 2 inteiros. Por exemplo:
//      "2013-07-06 17:42"
//   Depois de enviar a string, feche a conexão.


// Para este exercício, criaremos um servidor TCP server. Não há HTTP
//   envolvido aqui, então precisamos usar o módulo net do node núcleo, que tem
//   todas as funções básicas de rede.

//   O net módulo de rede tem um método chamado net.createServer () que leva um
//   função. A função que você precisa passar para net.createServer () é um
//   ouvinte de conexão que é chamado mais de uma vez. Cada conexão
//   recebida pelo seu servidor aciona outra chamada para o ouvinte. o
//   função ouvinte tem a assinatura:

//   function listener(socket) { /* ... */

//   net.createServer () também retorna uma instância do seu servidor. Você deve ligar
//   server.listen (portNumber) para começar a escutar em uma porta específica.

//   Um típico servidor TCP do Node se parece com isto:

//      var net = require ('net')
//      var server = net.createServer (function (socket) {
//        // lógica de manipulação de soquete
//      })
//      server.listen (8000)
 
// Lembre-se de usar o número da porta fornecido a você como a primeira linha de comando.

// O objeto de soquete contém muitos metadados referentes à conexão,
// mas também é um Node duplex Stream, em que pode ser lido de e
// escrito para. Para este exercício, precisamos apenas escrever dados e fechar
// o soquete.

// Use socket.write(data) para gravar dados no socket e socket.end () para
// fechar o soquete. Como alternativa, o método .end () também recebe dados
// objeto para que você possa simplificar para apenas: socket.end (data).

// A documentação no módulo de rede pode ser encontrada apontando seu navegador
// Aqui:

// file: // C: \ Usuários \ Jony \ AppData \ Roaming \ npm \ node_modules \ learnyounode \ node_ap
// idoc \ net.html

// Para criar a data, você precisará criar um formato personalizado a partir de um novo
// Objeto Date (). Os métodos que serão úteis são:
//      date.getFullYear()
//      date.getMonth()     // starts at 0
//      date.getDate()      // returns the day of month
//      date.getHours()
//      date.getMinutes()
//      Ou, se você quiser ser aventureiro, use o pacote strftime do npm. o
//      A função strftime (fmt, date) usa formatos de data como a data do unix
//      comando. Você pode ler mais sobre o strftime em:
//      (https://github.com/samsonjs/strftime)

var net = require( 'net' ); 
var server = net.createServer( function( socket ) {     
    var date = new Date(); var zerofill = function( val ) {         
        return ( val <= 9 ? '0' : '' ) + val;     
    }; 
 
    socket.end( date.getFullYear() + '-' + 
    zerofill( date.getMonth() + 1 ) + '-'+ 
    zerofill( date.getDate() ) + ' '+ 
    zerofill( date.getHours() ) + ':'+
    zerofill( date.getMinutes() ) + '\n' ); 
 
} ); 

server.listen( Number( process.argv[ 2 ] ) ); 
  
// var net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))