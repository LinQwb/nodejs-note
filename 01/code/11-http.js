var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
	

	// res.setHeader('Content-Type','text/plain;charset=utf-8');
	res.setHeader('Content-Type','text/html;charset=utf-8');
	res.end('<h1>hello 中文编码显示测试</h1>');


});

server.listen(3000, function(argument) {
	console.log('server is running');
})