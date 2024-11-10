var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
    fs.readFile(__dirname + '/index.html', function (erro, arquivo) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(arquivo);
        response.end();
    })
})

server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
})
