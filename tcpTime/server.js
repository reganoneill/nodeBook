'use strict';

const net = require('net');
const PORT = Number(process.argv[2]);



 // "YYYY-MM-DD hh:mm" <---use this format

function zeroFill(x){
	return (x < 10 ? '0' : '') + x;
};

const server = net.createServer( c => {

	const date = new Date();
	const fullYear = date.getFullYear();
	const fullMonth = date.getMonth();
	const fullDate = date.getDate();
	const fullHours = date.getHours();
	const fullMinutes = date.getMinutes();
 c.write(
 					 zeroFill(fullYear)
	 + '-' + zeroFill(fullMonth + 1)
	 + '-' + zeroFill(fullDate)
	 + ' ' + zeroFill(fullHours)
	 + ':' + zeroFill(fullMinutes) + '\n'
 );
 c.end();
});

server.listen(PORT, function(){
	console.log(`server up on ${PORT}`);
});
