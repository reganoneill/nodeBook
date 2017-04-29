'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const PORT = process.argv[2];

const server = http.createServer(function(req,res){

  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);

  if(req.method == 'GET' && req.url.pathname == '/api/parsetime'){

    let newTime = new Date(req.url.query.iso);
    let justTime = newTime.getTime();
    let justHour = newTime.getHours();
    let justMinute = newTime.getMinutes();
    let justSecond = newTime.getSeconds();
    let timeRes = {"hour": justHour, "minute": justMinute, "second": justSecond};
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.write(JSON.stringify(timeRes));
    res.end();
  }

  if(req.method == 'GET' && req.url.pathname == '/api/unixtime'){

    let newTime = new Date(req.url.query.iso);
    let justTime = newTime.getTime();
    let justHour = newTime.getHours();
    let justMinute = newTime.getMinutes();
    let justSecond = newTime.getSeconds();
    let timeRes = {"unixtime": justTime};
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.write(JSON.stringify(timeRes));
    res.end();
  }
});

server.listen(PORT, function(){
  console.log( `server up on ${PORT}`);
})
