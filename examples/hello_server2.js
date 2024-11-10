var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type": "text/html"});
    if(request.url == '/'){
        response.write("<h1>Hello World</h1>");
    } else if(request.url == '/bemvindo'){
        response.write("<h1>Bem vindo</h1>");
    } else { 
        response.write("<h1>404 Not Found</h1>");
    }
    response.end();
}) 

server.listen(3000, ()=>{
    console.log("Servidor iniciado na porta 3000")
})