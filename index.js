'use strict';

const server = require('./server.js');
const router = require('./router.js');
const requestHandlers = require('./requestHandlers.js');

//we require our requestHandler file in here, then pass methods from this
//file to the server, which in turn passes them to the router. This allows multiple abstraction
//layers to keep our separate files clean and pliable. Our router.js file is particularly reusable.

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


server.start(router.route, handle);
