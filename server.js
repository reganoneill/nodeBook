'use strict';

const http = require('http');

http.createServer(function(req, res){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Hello World');
  response.end();
}).listen(8888);
