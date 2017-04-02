// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument.

const fs = require('fs');
const filename = process.argv[2];

var reader = function(filename){
  let toRead = fs.readFile(filename, 'utf-8',(err, data) => {
    let arrayified = data.split('\n').length -1;
    return console.log(arrayified);
  });
};

reader(filename);
