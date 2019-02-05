// Escreva um servidor HTTP que receba apenas solicitações POST e converta
//   caracteres do corpo POST de entrada para letras maiúsculas e os retorna para o cliente.

//   Seu servidor deve escutar na porta fornecida pelo primeiro argumento para
//   seu programa.

// Enquanto você não está restrito a usar os recursos de streaming de
//    request e response objetos de, será muito mais fácil se você fizer isso.

//   Existem vários pacotes diferentes em npm que você pode usar para
//   "Transformar" os dados do fluxo conforme ele está passando. Para este exercício, o
//   O pacote through2-map oferece a API mais simples.

//   through2-map permite criar um fluxo de transformação usando apenas um único
//   função que leva um pedaço de dados e retorna um pedaço de dados. Está
//   projetado para funcionar muito como Array # map (), mas para fluxos:

//      var map = require ('through2-map')
//      inStream.pipe (map (função (pedaço) {
//        return chunk.toString (). split (''). reverse (). join ('')
//      })). pipe (outStream)

//   No exemplo acima, os dados recebidos do inStream são convertidos em um
//   String (se já não estiver), os caracteres são invertidos e o resultado
//   é passado para outStream. Então nós fizemos um reversor de personagens!
//   Lembre-se que o tamanho do bloco é determinado a montante e você tem
//   pouco controle sobre ele para dados recebidos.

//   Para instalar o tipo through2-map:

//      $ npm instala o through2-map

//   Se você não tem uma conexão com a Internet, basta fazer um node_modules
//   diretório e copie todo o diretório para o módulo que você deseja usar
//   de dentro do diretório de instalação do learnyounode:

//   file: // C: \ Usuários \ Jony \ AppData \ Roaming \ npm \ node_modules \ learnyounode \ node_mo
//   dules \ through2-map

//   Documentação para o through2-map foi instalada junto com o learnyounode
//   em seu sistema e você pode lê-los apontando seu navegador aqui:

//   file: // C: \ Usuários \ Jony \ AppData \ Roaming \ npm \ node_modules \ learnyounode \ docs \ th
//   rough2-map.html

var http = require( 'http' ); 
var map = require( 'through2-map' ); 
 
var server = http.createServer( function( request, response ) {     
    if ( request.method != 'POST' )       
      return response.end( 'Only POST requests are accepted' ); 
 
    request.pipe( map( function( chunk ) {             
        return chunk.toString().toUpperCase();        
     } ) )         
     .pipe( response );
     } );
     
      server.listen( Number( process.argv[ 2 ] ) ); 