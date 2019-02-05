// Escreva um servidor HTTP que serve o mesmo arquivo de texto para cada solicitação
//   recebida.

//   Seu servidor deve escutar na porta fornecida pelo primeiro argumento para
//   seu programa.

//   Você será fornecido com a localização do arquivo para servir como o segundo
//   argumento de linha de comando. Você deve usar o método fs.createReadStream () para
//   transmitir o conteúdo do arquivo para a resposta.

//   Porque precisamos criar um servidor HTTP para este exercício em vez de um
//   servidor TCP genérico, devemos usar o módulo http do Node core. Como o
//   módulo net, http também tem um método chamado http.createServer () mas este
//   cria um servidor que pode falar em HTTP.

//   http.createServer () recebe um retorno de chamada que é chamado uma vez para cada
//   conexão recebida pelo seu servidor. A função de retorno de chamada
//   assinatura:

//       function callback (request, response) { /* ... */ }

//   Onde os dois argumentos são objetos que representam a solicitação HTTP e
//   resposta correspondente para este pedido. request é usado para buscar
//   propriedades, como o cabeçalho e a string de consulta da solicitação,
//   response é para enviar dados para o cliente, cabeçalhos e corpo.

//   Tanto a request quanto o response também são Node streams! O que significa que você pode
//   usar as abstrações de transmissão para enviar e receber dados se elas se adequarem ao
//   caso de uso.

//   http.createServer () também retorna uma instância do seu servidor. Você deve ligar
//   server.listen (portNumber) para começar a escutar em uma porta específica.

//   Um típico servidor HTTP Node é assim:

//      var http = require ('http')
//      var server = http.createServer (função (req, res) {
//        // solicita a manipulação de lógica ...
//      })
//      server.listen (8000)

//   A documentação sobre o módulo http pode ser encontrada apontando o seu navegador
//   Aqui:
//   file: // C: \ Usuários \ Jony \ AppData \ Roaming \ npm \ node_modules \ learnyounode \ node_ap
//   idoc \ http.html

//   O módulo do núcleo fs também possui algumas APIs de streaming para arquivos. Você vai precisar
//   para usar o método fs.createReadStream () para criar um fluxo representando
//   o arquivo que você recebe como um argumento de linha de comando. O método retorna um
//   objeto de fluxo que você pode usar src.pipe (dst) para canalizar os dados do
//   fluxo src para o fluxo dst. Desta forma você pode conectar um sistema de arquivos
//   fluxo com um fluxo de resposta HTTP.

  var fs = require( 'fs' );
  var http = require ('http');
   
  var server = http.createServer (function (requisicao, resposta) {
    resposta.writeHead( 200, { 'Content-Type' : 'text/plain' } );     
    
    fs.createReadStream( process.argv[ 3 ] ).pipe( resposta);

     })
     server.listen(Number(process.argv[2]));

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))