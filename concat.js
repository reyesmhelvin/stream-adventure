const concat = require('concat-stream');
/*
const http = require('http');

var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(concat(function (body) {
			var obj = JSON.parse(body);
			res.end(Object.keys(obj).join('\n'));
		}));
	}
	else res.end();
});
server.listen(5000);
*/

process.stdin.pipe(concat(function(data){
	return reverse(data);
})).pipe(process.stdout);
