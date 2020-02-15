var http = require('http');
var gateway = require('./src/common/api/gateway');

var server = http.createServer(function (req, res) {
    res = gateway.handleRequest(req, res);
});
server.listen(8080);
