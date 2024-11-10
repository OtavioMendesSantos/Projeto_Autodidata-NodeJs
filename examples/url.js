var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Dados da Url</h1>");
    var result = url.parse(request.url, true);
    for(var key in result.query){
        response.write("<p>" + key + ": " + result.query[key] + "</p>");
    };
    response.end()
})

server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
});
