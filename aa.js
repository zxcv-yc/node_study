var http = require('http');
var data = { key: 'value', hello: 'hello' };
var srv = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(data));
});
srv.listen(8080, function () {
    console.log('listening on localhost:8080');
});

