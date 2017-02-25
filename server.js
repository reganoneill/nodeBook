'use strict';

const http = require('http');


//////////
// function say(word){
//   console.log(word);
// }
// function execute(someFunction, value){
//   someFunction(value);
// }
// execute(say, "yarp");
//another way to call it asynchronously
// execute(function(doit){console.log(doit)}, "yarp")
////////
//creating a server by passing in an annonymous function as parameter
// http.createServer(function(req, res){
//   response.writeHead(200, {'Content-Type':'text/plain'});
//   response.write('Hello World');
//   response.end();
// }).listen(8888);

//asynchronous, event driven, server side code with a callback
function onRequest(request,response){
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started');
