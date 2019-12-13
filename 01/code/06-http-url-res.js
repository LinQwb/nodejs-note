var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {

	console.log('request.path ==> ' + request.url);
	var url = request.url;
	if (url == '/') {
		response.end('index page');
	}else if (url == '/login') {
		response.end('login page');
	}else{
		
		response.end('404 Not Found.');
	}
});


server.listen(80, function() {
	console.log('服务器启动成功, 访问 http://127.0.0.1/');
});