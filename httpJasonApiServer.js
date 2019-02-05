// Escreva um servidor HTTP que serve dados JSON quando receber uma solicitação GET
//   para o caminho '/ api / parsetime'. Espere que a solicitação contenha uma string de consulta
//   com uma chave 'iso' e uma ISO_format time com o valor.

//   Por exemplo:

//   /api/parsetime?iso=2013-08-10T12:10:15.474Z

//   A resposta JSON deve conter apenas 'hour', 'minute' and 'second'
//   propriedades. Por exemplo:

//   {
//     "hour": 14,
//     "minute": 23,
//     "second": 15
//   }

//   Adicione o segundo ponto de extremidade para o caminho '/api/unixtime' que aceita o mesmo
//   consulta string, mas retorna tempo de época UNIX em milissegundos (o número de
//   milissegundos desde 1 Jan 1970 00:00:00 UTC) sob a propriedade 'unixtime'.
//   Por exemplo:

//      {"unixtime": 1376136615474}

//   Seu servidor deve escutar na porta fornecida pelo primeiro argumento para
//   seu programa.

// O objeto de solicitação de um servidor HTTP tem uma propriedade de URL que você
//   precisa usar para "rotear" suas solicitações para os dois endpoints.

//   Você pode analisar a URL e a string de consulta usando o node core 'url' module.
//   url.parse (request.url, true) analisará o conteúdo de request.url e fornecerá
//   você com um objeto com propriedades úteis.

//   Por exemplo, no prompt de comando, digite:

//      $ node -pe "require ('url'). parse ('/ teste? q = 1', verdadeiro)"

//   A documentação no módulo url pode ser encontrada apontando o seu navegador
//   Aqui:
//   file: // C: \ Usuários \ Jony \ AppData \ Roaming \ npm \ node_modules \ learnyounode \ node_ap
//   idoc \ url.html

//   Sua resposta deve estar em um formato de string JSON. Olhe para JSON.stringify ()
//   Para maiores informações.

//   Você também deve ser um bom cidadão da Web e definir o tipo de conteúdo corretamente:

//      res.writeHead(200, { 'Content-Type': 'application/json' })

//   O objeto Data de JavaScript pode imprimir datas no formato ISO, por ex. Novo
//   Data (). ToISOString (). Ele também pode analisar este formato se você passar a string
//   no construtor Date. Date.getTime () também será útil.

var http = require( 'http' ); var url = require( 'url' ); 
 
var server = http.createServer( function( request, response ){
         var parsedUrl = url.parse( request.url, true );     
         var ret = {}; 
 
    switch( parsedUrl.pathname ) {         
        case '/api/parsetime':            
         var date = new Date( parsedUrl.query.iso );            
          ret.hour = date.getHours();            
           ret.minute = date.getMinutes();            
            ret.second = date.getSeconds();             
            break; 

            case '/api/unixtime':             
            var date = new Date( parsedUrl.query.iso );            
             ret.unixtime = date.getTime();            
              break;         
              default:             
              return response.writeHead( 404 ).end();     } 
 
    response.writeHead( 200, { 'Content-Type' : 'application/json' } );    
     response.end( JSON.stringify( ret ) );
     } );
     server.listen( Number( process.argv[ 2 ] ) ); 

    //  var http = require('http')
    // var url = require('url')

    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }

    // function unixtime (time) {
    //   return { unixtime: time.getTime() }
    // }

    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result

    //   if (/^\/api\/parsetime/.test(req.url)) {
    //     result = parsetime(time)
    //   } else if (/^\/api\/unixtime/.test(req.url)) {
    //     result = unixtime(time)
    //   }

    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))
