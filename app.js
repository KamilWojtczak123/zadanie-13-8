var http = require('http'),
 fs = require('fs');

var server = http.createServer();

function sendFile(filename, response) {
    fs.readFile(filename, function(err,data) {
        response.end(data);
    });
}

server.on('request', function (request, response) {
    switch(request.url) {
        case '/':
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            sendFile('./templates/index.html', response);
            break;
        case '/about':
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            sendFile('./templates/about.html', response);
            break;
        case '/contact':
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            sendFile('./templates/contact.html', response);
            break;
        default:
            response.setHeader("Content-Type", "image/png; charset=utf-8");
            response.statusCode = 404;
            sendFile('./assets/images/404.png', response);
    }
});

server.listen(3000);