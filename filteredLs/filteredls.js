'use strict';

const fs = require('fs');
const path = require('path');
//todo: fix this
const readDir = process.argv[2];
const takeExt = process.argv[3];


const magicReader = function(directory, extension){

	let reader = fs.readdir(directory, (err, files) => {

		if(err) return 'nope! sorry!';
		let wantedFiles = [];
		let give2Array = extension.toString();

		let feederString = function(x){
			let first = x.split('');
			if(first[0] !== '.'){
				first.unshift('.');
			}
			let complete = first.join('');
			return complete;
		};
		feederString(give2Array);
		files.forEach( file => {
			if(path.extname(file) === feederString(give2Array)) {
				wantedFiles.push(file);
			}
		});
		wantedFiles.forEach( file => {
			console.log(file);
			return file;
		})
	});
};

//test
magicReader(readDir, takeExt);
