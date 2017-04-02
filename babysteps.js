// write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console

// use the process object to access command-line arguments

// write a function which accepts an array as an argument. it will cut the first two indexes off the array (because those two indexes are unneeded in process.argv) then form an expression to evaluate sum of numbers.

var nums = process.argv.slice(2);

//solution 1
// var addFunc = function(array){
//  console.log('our argument array:', array);
//  var adder = 0;
//  for(var x = 0; x <= array.length -1 ; x++){
//    adder += parseInt(array[x]);
//  }
//  console.log(adder, 'is the result');
// };
// addFunc(nums);


//solution 2
var sol2 = nums.reduce(function(total, i){
  total += parseInt(i);
  return total;
},0);
console.log(sol2);
