var http = require('http');
var fs = require('fs');
var url = require('url');

function rotear(pathname) {
    if (pathname !== '/') {
        const caminhoArquivo = __dirname + pathname + '.html';

        const existe = fs.existsSync(caminhoArquivo);
        if (existe) {
            return fs.readFileSync(caminhoArquivo);
        } else {
            return fs.readFileSync(__dirname + '/erro.html');
        }
    }
    return fs.readFileSync(__dirname + '/artigos.html');
}

var server = http.createServer(function (request, response) {
    var result = url.parse(request.url, true).pathname;
    if (result === '/favicon.ico') {
        response.writeHead(204);
        response.end();
        return;
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(rotear(result));
})

server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
});
