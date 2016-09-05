var http = require('http');
var fs = require('fs');

console.time('no-stream');
var server = http.createServer( (req, res) => {
	fs.readFile(__dirname + '/data.txt', (err, data) => {
		res.end(data);
	});
});
console.timeEnd('no-stream');


/*
console.time('with-stream');
var server = http.createServer( (req, res) => {
	var stream = fs.createReadStream(__dirname + 'data.txt');
	stream.pipe(res);
});
console.timeEnd('with-stream');
*/
server.listen(8000);


