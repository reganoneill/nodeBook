'use strict';

const fs = require('fs');

// You must write a module file to do most of the work. The module must
// export a single function that takes three arguments: the directory name,
// the filename extension string and a callback function, in that order. The
// filename extension argument must be the same as what was passed to your
// program. Don't turn it into a RegExp or prefix with "." or do anything
// except pass it to your module where you can do what you need to make your
// filter work.

module.exports = function(dirName, fileNameExt, function(err, data){
  if(err){
    return console.error(err);
  }
  fs.readdir(dirName, )

});
//
// The callback function must be called using the idiomatic node(err, data)
// convention. This convention stipulates that unless there's an error, the
// first argument passed to the callback will be null, and the second will be
// your data. In this exercise, the data will be your filtered list of files,
// as an Array. If you receive an error, e.g. from your call to
// fs.readdir(), the callback must be called with the error, and only the
// error, as the first argument.
//
// You must not print directly to the console from your module file, only
// from your original program.
//
// In the case of an error bubbling up to your original program file, simply
// check for it and print an informative message to the console.
//
// These four things are the contract that your module must follow.
//
//  1. Export a single function that takes exactly the arguments described.
//  2. Call the callback exactly once with an error or some data as described.
//  3. Don't change anything else, like global variables or stdout.
//  4. Handle all the errors that may occur and pass them to the callback.


const fs = require('fs');
const path = require('path');
const dirArg = process.argv[2];
const onlyThisExt = '.' + process.argv[3];

var readFilterPrint = function(dirArg, onlyThisExt){
  fs.readdir(dirArg, 'utf-8', (err, files) => {
    files.forEach( ele => {
      if(path.extname(ele) == onlyThisExt){
        console.log(ele);
      }
    })
  })
};
readFilterPrint(dirArg, onlyThisExt);
