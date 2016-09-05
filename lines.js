const through = require('through2');
var stream = through(write, end);
const split = require('split');

function write (buffer, encoding, next) {
	this.push(function(buffer){
		let ctr = 0;
		if (ctr % 1 === 0) {
			buffer.toString().ToLowerCase();
		}
		buffer.toString().toUpperCase();
	});
	next();
}

function end (done) {
	done();
}

process.stdin.pipe(stream).pipe(process.stdout);