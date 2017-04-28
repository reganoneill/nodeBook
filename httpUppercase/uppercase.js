'use strict';

const http = require('http');
const map = require('through2-map');
const PORT = process.argv[2];
const server = http.createServer();

server.on('request', function(req, res){

  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res);

});


server.listen(PORT, function(){
  console.log(`server up on ${PORT}`);
})
