'use strict';

const http = require('http');
const fs = require('fs');
const PORT = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer(function(req, res){
   let filesender = fs.createReadStream(filePath);
   filesender.pipe(res);
});

server.listen(PORT, function(){
  console.log(`listening on port ${PORT}`)
});
