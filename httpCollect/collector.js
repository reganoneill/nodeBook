'use strict';

const http = require('http');
const bl = require('bl');
const webAddress = process.argv[2];

http.get(webAddress, res => {
  res.pipe(bl(function (err, data){
    let blob = data.toString();
    let blobArray = blob.split('');
    let blobCount = blobArray.length;
    console.log(blobCount);
    console.log(blob);
  }));

});
