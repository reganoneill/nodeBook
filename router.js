'use strict';

const reqRouter = require('./requestHandlers.js');

function route(handle, pathname, response, postDataBody){
  console.log(`About to route a request for ${pathname}`);
  if(typeof handle[pathname] === 'function'){
     handle[pathname](response, postDataBody);
  } else {
    console.log(`No request handler found for ${pathname}`);
    response.writeHead(400, {
      "Content-Type": "text/plain"
    });
    response.write("404 Not Found");
    response.end();
  }
};

exports.route = route;
