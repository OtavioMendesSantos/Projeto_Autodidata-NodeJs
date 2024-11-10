var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname, './index.html'), function (erro, arquivo) {
    if (erro) throw erro;
    console.log(arquivo.toString());
});

var arquivo = fs.readFileSync(path.join(__dirname, './index.html'));
console.log(arquivo.toString());