'use strict';

function start(){
  console.log("Request handler 'start' was called.");
  return "Hello start request!";
}

function upload(){
  console.log("Request handler 'upload' was called.");
  return "Hello upload request!"

}

exports.start = start;
exports.upload = upload;
