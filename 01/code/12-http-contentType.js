var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function(req, res) {
	
	res.setHeader('Content-Type','text/html;charset=utf-8');
	
	if (req.url === '/index.html') {
		fs.readFile('./resources/index.html', function(error, data) {

			if (error) {
				res.end('<h1>index.html Not Found!</h1>');
			}

			res.end(data.toString());
		});

	}else{
		var path = req.url;
		if (path.indexOf('jpg') != -1) {
			res.setHeader('Content-Type','image/jpeg;');
		}
		fs.readFile('./resources' + path, function(error, data) {

			if (error) {
				res.end('<h1>404 Not Found!</h1>');
			}

			res.end(data);
		});
	}
	


});

server.listen(3000, function(argument) {
	console.log('server is running');
})