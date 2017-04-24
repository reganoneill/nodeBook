'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(dirName, fileNameExt, callback){
  if(!(fileNameExt.includes('.'))) {
    let first = '.';
    fileNameExt = first.concat(fileNameExt);
  }
  fs.readdir(dirName, 'utf-8', function(err, files){
    let fileArray = [];
    if (err) return callback(err)

    files.forEach( ele => {
      // console.log(path.extname(ele));
      if(path.extname(ele) == fileNameExt){
        // console.log(ele);
        fileArray.push(ele);
        }
      });

      return callback(err, fileArray);
    });

};
