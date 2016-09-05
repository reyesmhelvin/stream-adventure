const through2 = require('through2');
const split = require('split');
var ctr = 0;
process.stdin.pipe(split()).pipe(through2(function (line, _, next) {
	ctr++;
	if (ctr % 2 === 0) {
		console.log(line.toString().toUpperCase());
	}else{
		console.log(line.toString().toLowerCase());
	}
	next();
}));