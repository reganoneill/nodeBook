'use strict';

var querystring = require("querystring");
const fs = require('fs');

function start(response, postDataBody){
  console.log("Request handler 'start' was called.");
  var body =
  '<html>'+
     '<head>'+
     '<meta http-equiv="Content-Type" content="text/html; '+
     'charset=UTF-8" />'+
     '</head>'+
     '<body>'+
       '<form action="/upload" enctype="multipart/form-data" method="post">'+
         '<textarea name="text" rows="20" cols="60"></textarea>'+
         '<input type="file" name="upload">' +
         '<input type="submit" value="Upload file" />'+
       '</form>'+
     '</body>'+
   '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postDataBody){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent the TEXT: " + querystring.parse(postDataBody).text);
  response.end();
}

function show(response){
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "image.png"});
  fs.createReadStream(`${__dirname}/data/fun-giraffe.png`).pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
