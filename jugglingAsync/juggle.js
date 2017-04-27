'use strict';

const bl = require('bl');
const http = require('http');
const firstAddress = process.argv[2];
const secondAddress = process.argv[3];
const thirdAddress = process.argv[4];

http.get(firstAddress, res => {
  res.pipe(bl(function(err, data){
    let blob1 = data.toString();
    console.log(blob1);
    http.get(secondAddress, res => {
      res.pipe(bl(function(err, data){
        let blob2 = data.toString();
        console.log(blob2);
        http.get(thirdAddress, res => {
          res.pipe(bl(function(err, data){
            let blob3 = data.toString();
            console.log(blob3);
          }));
        });
      }));
    });
  }));
});
