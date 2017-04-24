'use strict';

const http = require('http');

let urlReq = process.argv[2];

http.get(urlReq, (res) => {
  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    console.log(chunk);
  })
});
